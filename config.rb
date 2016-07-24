###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# set :slim, { pretty: true, sort_attrs: false, format: :html }

###
# Middleman Google Analytics
###
activate :google_analytics do |ga|
  ga.tracking_id = 'UA-38204078-5'
end

###
# Deploy-specific configuration
###
activate :deploy do |deploy|
  deploy.deploy_method = :git
  # User ページであるため 'master'
  deploy.branch = 'master'
  # Run Automatically
  # deploy.build_before = true
end
