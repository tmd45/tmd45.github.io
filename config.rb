Time.zone = 'Tokyo'

###
# Middleman Blog Setting
###
activate :blog do |blog|
  blog.prefix = 'blog'
  blog.sources = '{category}/{year}-{month}-{day}-{page}-{title}.html'
  blog.permalink = '{category}/{year}/{month}/{day}/{page}.html'
  blog.layout = 'blog'

  blog.tag_template = 'blog/tags.html'
  blog.calendar_template = 'blog/calendar.html'
end

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
activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

###
# Directory Setting
###
set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'images'

set :slim, { pretty: true, sort_attrs: false, format: :html }

###
# Build-specific configuration
###
configure :build do
  activate :minify_css
  activate :minify_javascript
end
###
# Bower Components Support
# see: http://qiita.com/osakanafish/items/f7866947e3c487eb9e70
###
after_configuration do
  bowerrc = JSON.parse File.read(File.join "#{root}", '.bowerrc')
  bower_dir = bowerrc['directory']
  sprockets.append_path File.join("#{root}", bower_dir)
end
