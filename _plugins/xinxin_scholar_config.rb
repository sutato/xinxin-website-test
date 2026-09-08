# Ensure Jekyll Scholar highlights Xinxin Yao rather than the al-folio template author.
Jekyll::Hooks.register :site, :after_init do |site|
  site.config["scholar"] ||= {}
  site.config["scholar"]["last_name"] = ["Yao"]
  site.config["scholar"]["first_name"] = ["Xinxin", "X."]
end
