# A sample Guardfile
# More info at https://github.com/guard/guard#readme

#guard 'jekyll' do
  #watch /.*/
#end

#guard 'markdown', :convert_on_start => true, :dry_run => true do  
  ## See README for info on the watch statement below
  ## Will not convert while :dry_run is true. Once you're happy with your watch statements remove it
  #watch (/source_dir\/(.+\/)*(.+\.)(md|markdown)/i) { |m| "source_dir/#{m[1]}#{m[2]}#{m[3]}|output_dir/#{m[1]}#{m[2]}html"}
  #watch (/source_dir\/(.+\/)*(.+\.)(md|markdown)/i) { |m| "source_dir/#{m[1]}#{m[2]}#{m[3]}|output_dir/#{m[1]}#{m[2]}html|optional_template.html.erb"}
#end

guard 'livereload' do
  watch (/\_site\/.+/)
end
