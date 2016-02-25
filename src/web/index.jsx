import packageJson from '../../package.json';
import { PluginManifest, PluginStore } from 'graylog-web-plugin/plugin';
import MapVisualization from 'components/MapVisualization';
import MapPage from 'pages/MapPage';
import FieldAnalyzerMapComponent from 'components/FieldAnalyzerMapComponent';

PluginStore.register(new PluginManifest(packageJson, {
  routes: [
    { path: '/maps', component: MapPage },
  ],
  widgets: [
    {
      type: 'org.graylog.plugins.map.widget.strategy.MapWidgetStrategy',
      displayName: 'Map',
      defaultHeight: 2,
      defaultWidth: 2,
      visualizationComponent: MapVisualization,
    },
  ],
  fieldAnalyzers: [
    {
      refId: 'fieldAnalyzerMapComponent',
      displayName: 'World Map',
      component: FieldAnalyzerMapComponent,
      displayPriority: 100,
    },
  ],
}));
