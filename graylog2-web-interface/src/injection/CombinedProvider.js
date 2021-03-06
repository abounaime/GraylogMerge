class CombinedProvider {
  constructor() {
    /* eslint-disable import/no-require, global-require */
    this.actions = {
      AlarmCallbackHistory: () => require('actions/alarmcallbacks/AlarmCallbackHistoryActions'),
      AlarmCallbacks: () => require('actions/alarmcallbacks/AlarmCallbacksActions'),
      AlertConditions: () => require('actions/alertconditions/AlertConditionsActions'),
      AlertNotifications: () => require('actions/alertnotifications/AlertNotificationsActions'),
      Alerts: () => require('actions/alerts/AlertsActions'),
      CodecTypes: () => require('actions/codecs/CodecTypesActions'),
      Authentication: () => require('actions/authentication/AuthenticationActions'),
      Configuration: () => require('actions/configurations/ConfigurationActions'),
      ConfigurationBundles: () => require('actions/configuration-bundles/ConfigurationBundlesActions'),
      Decorators: () => require('actions/decorators/DecoratorsActions'),
      Deflector: () => require('actions/indices/DeflectorActions'),
      Extractors: () => require('actions/extractors/ExtractorsActions'),
      GettingStarted: () => require('actions/gettingstarted/GettingStartedActions'),
      HistogramData: () => require('actions/sources/HistogramDataActions'),
      IndexerCluster: () => require('actions/indexers/IndexerClusterActions'),
      IndexerOverview: () => require('actions/indexers/IndexerOverviewActions'),
      IndexRanges: () => require('actions/indices/IndexRangesActions'),
      IndexSets: () => require('actions/indices/IndexSetsActions'),
      Indices: () => require('actions/indices/IndicesActions'),
      IndicesConfiguration: () => require('actions/indices/IndicesConfigurationActions'),
      Inputs: () => require('actions/inputs/InputsActions'),
      InputTypes: () => require('actions/inputs/InputTypesActions'),
      Ldap: () => require('actions/ldap/LdapActions'),
      LdapGroups: () => require('actions/ldap/LdapGroupsActions'),
      Loggers: () => require('actions/system/LoggersActions'),
      LookupTables: () => require('actions/lookup-tables/LookupTablesActions'),
      LookupTableCaches: () => require('actions/lookup-tables/LookupTableCachesActions'),
      LookupTableDataAdapters: () => require('actions/lookup-tables/LookupTableDataAdaptersActions'),
      MessageCounts: () => require('actions/messages/MessageCountsActions'),
      Messages: () => require('actions/messages/MessagesActions'),
      Metrics: () => require('actions/metrics/MetricsActions'),
      Nodes: () => require('actions/nodes/NodesActions'),
      Notifications: () => require('actions/notifications/NotificationsActions'),
      Refresh: () => require('actions/tools/RefreshActions'),
      SavedSearches: () => require('actions/search/SavedSearchesActions'),
      ServerAvailability: () => require('actions/sessions/ServerAvailabilityActions'),
      Session: () => require('actions/sessions/SessionActions'),
      SingleNode: () => require('actions/nodes/SingleNodeActions'),
      Streams: () => require('actions/streams/StreamsActions'),
      SystemJobs: () => require('actions/systemjobs/SystemJobsActions'),
      Widgets: () => require('actions/widgets/WidgetsActions'),
      UsersAndStreams: () => require('actions/usersandstreams/UsersAndStreamsActions')

  };
    this.stores = {
      AlarmCallbackHistory: () => require('stores/alarmcallbacks/AlarmCallbackHistoryStore'),
      AlarmCallbacks: () => require('stores/alarmcallbacks/AlarmCallbacksStore'),
      AlertConditions: () => require('stores/alertconditions/AlertConditionsStore'),
      AlertNotifications: () => require('stores/alertnotifications/AlertNotificationsStore'),
      Alerts: () => require('stores/alerts/AlertsStore'),
      Authentication: () => require('stores/authentication/AuthenticationStore'),
      ClusterOverview: () => require('stores/cluster/ClusterOverviewStore'),
      CodecTypes: () => require('stores/codecs/CodecTypesStore'),
      ConfigurationBundles: () => require('stores/configuration-bundles/ConfigurationBundlesStore'),
      Configurations: () => require('stores/configurations/ConfigurationsStore'),
      CurrentUser: () => require('stores/users/CurrentUserStore'),
      Dashboards: () => require('stores/dashboards/DashboardsStore'),
      Decorators: () => require('stores/decorators/DecoratorsStore'),
      Deflector: () => require('stores/indices/DeflectorStore'),
      Extractors: () => require('stores/extractors/ExtractorsStore'),
      FieldGraphs: () => require('stores/field-analyzers/FieldGraphsStore'),
      FieldQuickValues: () => require('stores/field-analyzers/FieldQuickValuesStore'),
      Fields: () => require('stores/fields/FieldsStore'),
      FieldStatistics: () => require('stores/field-analyzers/FieldStatisticsStore'),
      Focus: () => require('stores/tools/FocusStore'),
      GettingStarted: () => require('stores/gettingstarted/GettingStartedStore'),
      GlobalThroughput: () => require('stores/metrics/GlobalThroughputStore'),
      GrokPatterns: () => require('stores/grok-patterns/GrokPatternsStore'),
      HistogramData: () => require('stores/sources/HistogramDataStore'),
      IndexerCluster: () => require('stores/indexers/IndexerClusterStore'),
      IndexerFailures: () => require('stores/indexers/IndexerFailuresStore'),
      IndexerOverview: () => require('stores/indexers/IndexerOverviewStore'),
      IndexRanges: () => require('stores/indices/IndexRangesStore'),
      IndexSets: () => require('stores/indices/IndexSetsStore'),
      Indices: () => require('stores/indices/IndicesStore'),
      IndicesConfiguration: () => require('stores/indices/IndicesConfigurationStore'),
      Inputs: () => require('stores/inputs/InputsStore'),
      InputStates: () => require('stores/inputs/InputStatesStore'),
      InputStaticFields: () => require('stores/inputs/InputStaticFieldsStore'),
      InputTypes: () => require('stores/inputs/InputTypesStore'),
      Journal: () => require('stores/journal/JournalStore'),
      LdapGroups: () => require('stores/ldap/LdapGroupsStore'),
      Ldap: () => require('stores/ldap/LdapStore'),
      Loggers: () => require('stores/system/LoggersStore'),
      LookupTables: () => require('stores/lookup-tables/LookupTablesStore'),
      LookupTableCaches: () => require('stores/lookup-tables/LookupTableCachesStore'),
      LookupTableDataAdapters: () => require('stores/lookup-tables/LookupTableDataAdaptersStore'),
      MessageCounts: () => require('stores/messages/MessageCountsStore'),
      MessageFields: () => require('stores/messages/MessageFieldsStore'),
      Messages: () => require('stores/messages/MessagesStore'),
      Metrics: () => require('stores/metrics/MetricsStore'),
      Nodes: () => require('stores/nodes/NodesStore'),
      Notifications: () => require('stores/notifications/NotificationsStore'),
      Outputs: () => require('stores/outputs/OutputsStore'),
      Plugins: () => require('stores/plugins/PluginsStore'),
      Preferences: () => require('stores/users/PreferencesStore'),
      Refresh: () => require('stores/tools/RefreshStore'),
      Roles: () => require('stores/users/RolesStore'),
      SavedSearches: () => require('stores/search/SavedSearchesStore'),
      Search: () => require('stores/search/SearchStore'),
      ServerAvailability: () => require('stores/sessions/ServerAvailabilityStore'),
      Session: () => require('stores/sessions/SessionStore'),
      SingleNode: () => require('stores/nodes/SingleNodeStore'),
      Sources: () => require('stores/sources/SourcesStore'),
      Startpage: () => require('stores/users/StartpageStore'),
      StreamRules: () => require('stores/streams/StreamRulesStore'),
      Streams: () => require('stores/streams/StreamsStore'),
      System: () => require('stores/system/SystemStore'),
      SystemJobs: () => require('stores/systemjobs/SystemJobsStore'),
      SystemLoadBalancer: () => require('stores/load-balancer/SystemLoadBalancerStore'),
      SystemMessages: () => require('stores/systemmessages/SystemMessagesStore'),
      SystemProcessing: () => require('stores/system-processing/SystemProcessingStore'),
      SystemShutdown: () => require('stores/system-shutdown/SystemShutdownStore'),
      Tools: () => require('stores/tools/ToolsStore'),
      UniversalSearch: () => require('stores/search/UniversalSearchStore'),
      UsageStatsOptOut: () => require('stores/usagestats/UsageStatsOptOutStore'),
      Users: () => require('stores/users/UsersStore'),
      Widgets: () => require('stores/widgets/WidgetsStore'),
      UsersAndStreams: () => require('stores/usersandstreams/UsersAndStreamsStore')

  };
    /* eslint-enable import/no-require, global-require */
  }

  get(name) {
    const result = {};
    if (this.stores[name]) {
      result[`${name}Store`] = this.stores[name]();
    }
    if (this.actions[name]) {
      result[`${name}Actions`] = this.actions[name]();
    }
    return result;
  }
}

if (typeof window.combinedProvider === 'undefined') {
  window.combinedProvider = new CombinedProvider();
}

export default window.combinedProvider;
