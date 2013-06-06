_.mixin({
  parseIntCloneDeep: function (obj, radix) {
    radix = radix || 10;
    
    var convertedStr;
    var objClone = _.cloneDeep(obj, function (value) {

      // If the value is not a String,append the original value to it and do 
      // nothing else 
      
      if (!_.isString(value)) {
        return undefined;
      }
      
      convertedStr = parseInt(value, radix);
      
      if (typeof convertedStr === 'number' && !_.isNaN(convertedStr)){
        return convertedStr;
      } else {
        return undefined;
      }
    });

    return objClone;
  }
});
