(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("7cb7f6d9-2644-4b63-8254-eaa8d4b2f247");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '7cb7f6d9-2644-4b63-8254-eaa8d4b2f247' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"eb021962-b09f-4c1d-88d6-3bd1d5bf54a8":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"74743","type":"PolyAnnotation"}},"id":"74674","type":"LassoSelectTool"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"74614","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74706","type":"Circle"},{"attributes":{},"id":"74676","type":"RedoTool"},{"attributes":{"callback":null},"id":"74612","type":"DataRange1d"},{"attributes":{"callback":null},"id":"74679","type":"HoverTool"},{"attributes":{},"id":"74661","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74707","type":"Circle"},{"attributes":{},"id":"74637","type":"ResetTool"},{"attributes":{"data_source":{"id":"74705","type":"ColumnDataSource"},"glyph":{"id":"74706","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74707","type":"Circle"},"selection_glyph":null,"view":{"id":"74709","type":"CDSView"}},"id":"74708","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"74620","type":"LinearAxis"}],"center":[{"id":"74624","type":"Grid"},{"id":"74629","type":"Grid"}],"left":[{"id":"74625","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"74694","type":"GlyphRenderer"},{"id":"74696","type":"Span"},{"id":"74697","type":"Span"},{"id":"74698","type":"Span"},{"id":"74701","type":"GlyphRenderer"}],"title":{"id":"74703","type":"Title"},"toolbar":{"id":"74640","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"74612","type":"DataRange1d"},"x_scale":{"id":"74616","type":"LinearScale"},"y_range":{"id":"74614","type":"DataRange1d"},"y_scale":{"id":"74618","type":"LinearScale"}},"id":"74611","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"74735","type":"BasicTickFormatter"},"ticker":{"id":"74661","type":"BasicTicker"}},"id":"74660","type":"LinearAxis"},{"attributes":{"source":{"id":"74705","type":"ColumnDataSource"}},"id":"74709","type":"CDSView"},{"attributes":{},"id":"74638","type":"SaveTool"},{"attributes":{"callback":null},"id":"74639","type":"HoverTool"},{"attributes":{},"id":"74616","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.21484300137312468},"id":"74710","type":"Span"},{"attributes":{"ticker":{"id":"74661","type":"BasicTicker"}},"id":"74664","type":"Grid"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.15209716425007633},"id":"74711","type":"Span"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"74733","type":"BasicTickFormatter"},"ticker":{"id":"74666","type":"BasicTicker"}},"id":"74665","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74693","type":"Circle"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"74712","type":"Span"},{"attributes":{},"id":"74666","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"74713","type":"Dash"},{"attributes":{"dimension":1,"ticker":{"id":"74666","type":"BasicTicker"}},"id":"74669","type":"Grid"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"74740","type":"Selection"},"selection_policy":{"id":"74739","type":"UnionRenderers"}},"id":"74714","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"7qx+MbH82z8taAlcwdPMP2RFpmpIiMs/VPd+dISI1j+QjUmxOK7VPyhwmz5eQNE/YHF86U9Izz8YN/msnr7PPyjO/sTiTs8/LFXTKecq0z/kTaFlAynUP2DJI4UMO84/IGLXJUgNzD8wUKgDDerNPxDSzcUXbc4/kDNyJsikyj/wFHev55XOP4Bvij2VrsQ/4I8dAXxLyD+Ad8zwRu/RPw==","dtype":"float64","shape":[20]}},"selected":{"id":"74738","type":"Selection"},"selection_policy":{"id":"74737","type":"UnionRenderers"}},"id":"74705","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"74611","subtype":"Figure","type":"Plot"},0,0],[{"id":"74651","subtype":"Figure","type":"Plot"},0,1]]},"id":"74745","type":"GridBox"},{"attributes":{"data_source":{"id":"74714","type":"ColumnDataSource"},"glyph":{"id":"74713","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"74716","type":"CDSView"}},"id":"74715","type":"GlyphRenderer"},{"attributes":{},"id":"74656","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74692","type":"Circle"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD9I3tS4V+rMP7gbLMPg7Mo/HHCIRHVOzT9orzckCyTOP1wEFcjrLsw/GFjIBtNVyz+IfM+LFJ/NP2h6CcmRC8w/eFWrsUlMzD9YsRCvESnPPzD6BbtRL9Q/bGdUYzXr0j8AebTCVJLRP+D0hUiIM80/eDGzGTRz0z8oEF3N8onTPzjOhQa9ItQ/kLBgWUSo1j8gMD3n4GLXPw==","dtype":"float64","shape":[20]}},"selected":{"id":"74725","type":"Selection"},"selection_policy":{"id":"74724","type":"UnionRenderers"}},"id":"74691","type":"ColumnDataSource"},{"attributes":{"source":{"id":"74714","type":"ColumnDataSource"}},"id":"74716","type":"CDSView"},{"attributes":{"text":"mu"},"id":"74717","type":"Title"},{"attributes":{},"id":"74720","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"74741","type":"BoxAnnotation"}},"id":"74671","type":"BoxZoomTool"},{"attributes":{},"id":"74722","type":"BasicTickFormatter"},{"attributes":{},"id":"74724","type":"UnionRenderers"},{"attributes":{},"id":"74672","type":"WheelZoomTool"},{"attributes":{},"id":"74658","type":"LinearScale"},{"attributes":{},"id":"74678","type":"SaveTool"},{"attributes":{},"id":"74725","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"74742","type":"BoxAnnotation"}},"id":"74673","type":"BoxSelectTool"},{"attributes":{},"id":"74677","type":"ResetTool"},{"attributes":{},"id":"74726","type":"UnionRenderers"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.2515582690238711},"id":"74696","type":"Span"},{"attributes":{},"id":"74670","type":"PanTool"},{"attributes":{},"id":"74727","type":"Selection"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.17824444314769777},"id":"74697","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74728","type":"BoxAnnotation"},{"attributes":{},"id":"74675","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74729","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"74730","type":"PolyAnnotation"}},"id":"74634","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"74691","type":"ColumnDataSource"},"glyph":{"id":"74692","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74693","type":"Circle"},"selection_glyph":null,"view":{"id":"74695","type":"CDSView"}},"id":"74694","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"74730","type":"PolyAnnotation"},{"attributes":{},"id":"74632","type":"WheelZoomTool"},{"attributes":{},"id":"74733","type":"BasicTickFormatter"},{"attributes":{},"id":"74635","type":"UndoTool"},{"attributes":{},"id":"74636","type":"RedoTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"74670","type":"PanTool"},{"id":"74671","type":"BoxZoomTool"},{"id":"74672","type":"WheelZoomTool"},{"id":"74673","type":"BoxSelectTool"},{"id":"74674","type":"LassoSelectTool"},{"id":"74675","type":"UndoTool"},{"id":"74676","type":"RedoTool"},{"id":"74677","type":"ResetTool"},{"id":"74678","type":"SaveTool"},{"id":"74679","type":"HoverTool"}]},"id":"74680","type":"Toolbar"},{"attributes":{},"id":"74735","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"74691","type":"ColumnDataSource"}},"id":"74695","type":"CDSView"},{"attributes":{},"id":"74737","type":"UnionRenderers"},{"attributes":{},"id":"74621","type":"BasicTicker"},{"attributes":{},"id":"74738","type":"Selection"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"74698","type":"Span"},{"attributes":{"callback":null,"overlay":{"id":"74729","type":"BoxAnnotation"}},"id":"74633","type":"BoxSelectTool"},{"attributes":{},"id":"74739","type":"UnionRenderers"},{"attributes":{},"id":"74740","type":"Selection"},{"attributes":{"overlay":{"id":"74728","type":"BoxAnnotation"}},"id":"74631","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"74630","type":"PanTool"},{"id":"74631","type":"BoxZoomTool"},{"id":"74632","type":"WheelZoomTool"},{"id":"74633","type":"BoxSelectTool"},{"id":"74634","type":"LassoSelectTool"},{"id":"74635","type":"UndoTool"},{"id":"74636","type":"RedoTool"},{"id":"74637","type":"ResetTool"},{"id":"74638","type":"SaveTool"},{"id":"74639","type":"HoverTool"}]},"id":"74640","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74741","type":"BoxAnnotation"},{"attributes":{"source":{"id":"74700","type":"ColumnDataSource"}},"id":"74702","type":"CDSView"},{"attributes":{"text":"tau"},"id":"74703","type":"Title"},{"attributes":{},"id":"74630","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74742","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"74700","type":"ColumnDataSource"},"glyph":{"id":"74699","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"74702","type":"CDSView"}},"id":"74701","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"74743","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"74652","type":"DataRange1d"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"74654","type":"DataRange1d"},{"attributes":{"tools":[{"id":"74630","type":"PanTool"},{"id":"74631","type":"BoxZoomTool"},{"id":"74632","type":"WheelZoomTool"},{"id":"74633","type":"BoxSelectTool"},{"id":"74634","type":"LassoSelectTool"},{"id":"74635","type":"UndoTool"},{"id":"74636","type":"RedoTool"},{"id":"74637","type":"ResetTool"},{"id":"74638","type":"SaveTool"},{"id":"74639","type":"HoverTool"},{"id":"74670","type":"PanTool"},{"id":"74671","type":"BoxZoomTool"},{"id":"74672","type":"WheelZoomTool"},{"id":"74673","type":"BoxSelectTool"},{"id":"74674","type":"LassoSelectTool"},{"id":"74675","type":"UndoTool"},{"id":"74676","type":"RedoTool"},{"id":"74677","type":"ResetTool"},{"id":"74678","type":"SaveTool"},{"id":"74679","type":"HoverTool"}]},"id":"74746","type":"ProxyToolbar"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"74722","type":"BasicTickFormatter"},"ticker":{"id":"74621","type":"BasicTicker"}},"id":"74620","type":"LinearAxis"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"74720","type":"BasicTickFormatter"},"ticker":{"id":"74626","type":"BasicTicker"}},"id":"74625","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"74746","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"74747","type":"ToolbarBox"},{"attributes":{},"id":"74618","type":"LinearScale"},{"attributes":{},"id":"74626","type":"BasicTicker"},{"attributes":{"children":[{"id":"74747","type":"ToolbarBox"},{"id":"74745","type":"GridBox"}]},"id":"74748","type":"Column"},{"attributes":{"ticker":{"id":"74621","type":"BasicTicker"}},"id":"74624","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"74626","type":"BasicTicker"}},"id":"74629","type":"Grid"},{"attributes":{"below":[{"id":"74660","type":"LinearAxis"}],"center":[{"id":"74664","type":"Grid"},{"id":"74669","type":"Grid"}],"left":[{"id":"74665","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"74708","type":"GlyphRenderer"},{"id":"74710","type":"Span"},{"id":"74711","type":"Span"},{"id":"74712","type":"Span"},{"id":"74715","type":"GlyphRenderer"}],"title":{"id":"74717","type":"Title"},"toolbar":{"id":"74680","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"74652","type":"DataRange1d"},"x_scale":{"id":"74656","type":"LinearScale"},"y_range":{"id":"74654","type":"DataRange1d"},"y_scale":{"id":"74658","type":"LinearScale"}},"id":"74651","subtype":"Figure","type":"Plot"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"74699","type":"Dash"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"74727","type":"Selection"},"selection_policy":{"id":"74726","type":"UnionRenderers"}},"id":"74700","type":"ColumnDataSource"}],"root_ids":["74748"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"eb021962-b09f-4c1d-88d6-3bd1d5bf54a8","roots":{"74748":"7cb7f6d9-2644-4b63-8254-eaa8d4b2f247"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();