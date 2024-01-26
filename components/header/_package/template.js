var oc=oc||{};oc.components=oc.components||{};oc.components['de2e1c82665ed365d9eac8248bebd341af8b2df6']=function(model) {
    var __toOcStaticPathUrl = function(args) {
      return model.component.props._staticPath + 'public/' + args;
    } 
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = model.component.props;
    var __$$oc_initialData__ = rest;
    var __$$oc_Settings__ = {id: model.id, staticPath: _staticPath, baseUrl: _baseUrl, name: _componentName, version: _componentVersion};
    var innerFn = function(model){
  oc.reactComponents = oc.reactComponents || {};
  oc.reactComponents['becc6af8acb379f77076b4ff30e739eee44d4fd8'] = oc.reactComponents['becc6af8acb379f77076b4ff30e739eee44d4fd8'] || ((function() {
    var clientBundle = function(React2) {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var jsxRuntime = { exports: {} };
  var reactJsxRuntime_production_min = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var f = React2, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
  function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for (b in a)
      m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps)
      for (b in a = c.defaultProps, a)
        void 0 === d[b] && (d[b] = a[b]);
    return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  {
    jsxRuntime.exports = reactJsxRuntime_production_min;
  }
  var jsxRuntimeExports = jsxRuntime.exports;
  const App = () => {
    const [itemCount, setItemCount] = React2.useState(0);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Hello ,Header of project" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: itemCount }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            setItemCount(Math.max(itemCount - 1, 0));
          },
          children: "-"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            setItemCount(itemCount + 1);
          },
          children: "+"
        }
      )
    ] });
  };
  var useData$1 = {};
  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(useData$1, "__esModule", { value: true });
  useData$1.useData = DataProvider_1 = useData$1.DataProvider = void 0;
  const jsx_runtime_1 = jsxRuntimeExports;
  const react_1 = __importDefault(React2);
  const DataContext = react_1.default.createContext({});
  const DataProvider = ({ children, ...props }) => {
    return (0, jsx_runtime_1.jsx)(DataContext.Provider, { value: props, children });
  };
  var DataProvider_1 = useData$1.DataProvider = DataProvider;
  function useData() {
    const { value: { getData, ...rest } } = react_1.default.useContext(DataContext);
    const asyncGetData = react_1.default.useCallback((data) => {
      return new Promise((resolve, reject) => {
        getData({ ...rest, ...data }, (err, newData) => {
          if (err) {
            reject(err);
          } else {
            resolve(newData);
          }
        });
      });
    }, []);
    return { getData: asyncGetData, ...rest };
  }
  useData$1.useData = useData;
  function OCProvider(props) {
    const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = props;
    React2.useEffect(() => {
      window.oc.events.fire("oc:componentDidMount", rest);
    }, []);
    function _getData(providerProps, parameters, cb) {
      return window.oc.getData(
        {
          name: providerProps._componentName,
          version: providerProps._componentVersion,
          baseUrl: providerProps._baseUrl,
          parameters
        },
        (err, data) => {
          if (err) {
            return cb(err);
          }
          const { _staticPath: _staticPath2, _baseUrl: _baseUrl2, _componentName: _componentName2, _componentVersion: _componentVersion2, ...rest2 } = data.component.props;
          cb(null, rest2, data.component.props);
        }
      );
    }
    function _getSetting(providerProps, setting) {
      const settingHash = {
        name: providerProps._componentName,
        version: providerProps._componentVersion,
        baseUrl: providerProps._baseUrl,
        staticPath: providerProps._staticPath
      };
      return settingHash[setting];
    }
    const getData = (parameters, cb) => {
      if (!cb || typeof cb !== "function") {
        return new Promise((resolve, reject) => {
          _getData(props, parameters, (err, data) => {
            if (err) {
              return reject(err);
            }
            resolve(data);
          });
        });
      }
      _getData(props, parameters, cb);
    };
    const getSetting = (setting) => _getSetting(props, setting);
    rest.getData = getData;
    rest.getSetting = getSetting;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(DataProvider_1, { value: { ...rest }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, { ...rest }) });
  }
  function renderer(props, element, ssr) {
    if (window.ReactDOM.createRoot) {
      if (ssr) {
        window.ReactDOM.hydrateRoot(element, /* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }));
      } else {
        window.ReactDOM.createRoot(element).render(/* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }));
      }
    } else {
      if (ssr) {
        window.ReactDOM.hydrate(/* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }), element);
      } else {
        window.ReactDOM.render(/* @__PURE__ */ jsxRuntimeExports.jsx(OCProvider, { ...props }), element);
      }
    }
  }
  renderer.component = OCProvider;
  return renderer;
}(React);

    return clientBundle;
  })());
  if (!model) return;
  var modelHTML =  model.__html ? model.__html : '';
  var ssr = !!modelHTML;
  var externals = [{"global":"React","url":"https://unpkg.com/react@18.2.0/umd/react.production.min.js","devUrl":"https://unpkg.com/react@18.2.0/umd/react.development.js","name":"react"},{"global":"ReactDOM","url":"https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js","devUrl":"https://unpkg.com/react-dom@18.2.0/umd/react-dom.development.js","name":"react-dom"}];
  var staticPath = model.component.props._staticPath;
  if (ssr) {
    externals.push({
      global: ['oc', 'components', 'de2e1c82665ed365d9eac8248bebd341af8b2df6'],
      url: staticPath + 'template.js',
      name: "template"
    });
  }
  var props = JSON.stringify(model.component.props);
  oc = oc || {};
  oc.__reactTemplate = oc.__reactTemplate || { count: 0 };
  var count = oc.__reactTemplate.count;
  var templateId = "oc-reactRoot-header-" + count;
  oc.__reactTemplate.count++;
  var ssrCall = 'oc.components["de2e1c82665ed365d9eac8248bebd341af8b2df6"]({ component: { props:' + props + ' } });';

  return '<div id="' + templateId + '" class="oc-reactRoot-header">' + modelHTML + '</div>' +
    '' +
    '<script>' +
    'oc = oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    '' +
      'oc.requireSeries(' + JSON.stringify(externals) + ', function(){' +
        'var targetNode = document.getElementById("' + templateId + '");' +
        'targetNode.setAttribute("id","");' +
        (ssr ? ssrCall : '') +
        'oc.components["de2e1c82665ed365d9eac8248bebd341af8b2df6"]({ component: { props:' + props + ' } });' +
        'oc.reactComponents["becc6af8acb379f77076b4ff30e739eee44d4fd8"](' + props + ', targetNode, ' + !!modelHTML  + ');' +
      '});' +
    '});' +
  '</script>'
};
    return innerFn(model);
  }
  