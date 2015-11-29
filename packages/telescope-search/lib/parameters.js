function addSearchQueryParameter (parameters, terms) {
  if(!!terms.query) {
    var parameters = Telescope.utils.deepExtend(true, parameters, {
      find: {
        $or: [
          {title: {$regex: terms.query, $options: 'i'}},
          {url: {$regex: terms.query, $options: 'i'}},
          {body: {$regex: terms.query, $options: 'i'}},
          {Tags: {$regex: terms.query, $options: 'i'}}
        ]
      }
    });
  }
  console.log(parameters);
  return parameters;
}
Telescope.callbacks.add("postsParameters", addSearchQueryParameter);
