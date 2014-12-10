activate :sprockets

after_configuration do
  sprockets.append_path "#{root}/vendor/assets"

  sprockets.import_asset 'fontello_normal-ie7.css'
  sprockets.import_asset 'waypoints.js'
  sprockets.import_asset 'waypoints-sticky.js'
end

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

activate :syntax, line_numbers: true

set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'images'

set :slim, { pretty: true, sort_attrs: false, format: :html5 }

# Build-specific configuration
configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

activate :deploy do |deploy|
  deploy.method = :git
  # User ページであるため 'master'
  deploy.branch = 'master'
  # Run Automatically
  # deploy.build_before = true
end
