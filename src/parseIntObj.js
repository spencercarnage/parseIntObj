/**
 * An Underscore.js mixin that does a shallow conversion of all number string
 * values into proper "Number" values.
 */

_.mixin({
  parseIntObj: function (obj, radix) {
    radix = radix || 10;

    var convertedStr;
    var objClone = _.clone(obj);

    _.map(obj, function (value, index) {
      // If the value is not a String, append the original value to it and do
      // nothing else
      if (!_.isString(value)) {
        //objClone[index] = value;
        //return value;
        return;
      }

      convertedStr = parseInt(value, radix);
                                                                                  
      if (typeof convertedStr === 'number' && !_.isNaN(convertedStr) &&
          value.split('.').length < 3) {       
        objClone[index] = convertedStr;
      } else {                                                                  
        objClone[index] = value;
      }                                                                         
    });

    return objClone;
  }
});
