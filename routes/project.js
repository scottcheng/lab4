exports.viewProject = function(req, res) {
  name = req.params.name;
  res.render('project', {
    name: name
  });
};
