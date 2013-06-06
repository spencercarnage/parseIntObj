/**
 * An Underscore.js mixin that does a shallow conversion of all number string
 * values into proper "Number" values.
 */

_.mixin({
  parseIntObj: function (obj, radix) {
    radix = radix || 10;

    var returnObj = {};
    var objClone = _.clone(obj);

    var result = _.map(obj, function (value, key) {
      console.log(value, key);

      // If the value is not a String, append the original value to it and do
      // nothing else
      if (!_.isString(value)) {
        returnObj[key] = value;
        return value;
      }

      var convertedStr = parseInt(value, radix);
                                                                                  
      if (typeof convertedStr === 'number' && !_.isNaN(convertedStr)) {       
        returnObj[key] = convertedStr;
        return convertedStr;
      } else {                                                                  
        returnObj[key] = value;
        return value;
      }                                                                         
    });
    //return returnObj;
    console.log(result);
    return result;
  }
});
