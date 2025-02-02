import Backend from 'i18next-xhr-backend';

export class CustomBackend extends Backend {
   constructor(services, options = {}) {
      super(services, options)
   }
   read(language, namespace, callback) {
      var loadPath = this.options.loadPath;
      const payload = this.options.parseLoadPayLoad({ lng: language, ns: namespace });

      if (typeof this.options.loadPath === 'function') {
         loadPath = this.options.loadPath([language], [namespace]);
      }

      let url = this.services.interpolator.interpolate(loadPath, { lng: language, ns: namespace });

      this.loadUrl(url, callback, payload);
   }

   loadUrl(url, callback, payload) {
      this.options.ajax(url, this.options, (data, xhr) => {
         if (xhr.status >= 500 && xhr.status < 600) return callback('failed loading ' + url, true /* retry */);
         if (xhr.status >= 400 && xhr.status < 500) return callback('failed loading ' + url, false /* no retry */);

         let ret, err;
         try {
            ret = this.options.parse(data, url);
         } catch (e) {
            err = 'failed parsing ' + url + ' to json';
         }
         if (err) return callback(err, false);
         callback(null, ret);
      }, payload);
   }
}
