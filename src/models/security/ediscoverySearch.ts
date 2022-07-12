import {createDataSourceFromDiscriminatorValue} from './createDataSourceFromDiscriminatorValue';
import {createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue} from './createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue';
import {DataSourceScopes} from './dataSourceScopes';
import {AdminMember1, DataSource, EdiscoveryAddToReviewSetOperation, EdiscoveryEstimateOperation, EdiscoveryNoncustodialDataSource, Search} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EdiscoverySearch extends Search implements Parsable {
    /** Adds an additional source to the eDiscovery search. */
    private _additionalSources?: DataSource[] | undefined;
    /** Adds the results of the eDiscovery search to the specified reviewSet. */
    private _addToReviewSetOperation?: EdiscoveryAddToReviewSetOperation | AdminMember1 | undefined;
    /** Custodian sources that are included in the eDiscovery search. */
    private _custodianSources?: DataSource[] | undefined;
    /** When specified, the collection will span across a service for an entire workload. Possible values are: none, allTenantMailboxes, allTenantSites, allCaseCustodians, allCaseNoncustodialDataSources. */
    private _dataSourceScopes?: DataSourceScopes | AdminMember1 | undefined;
    /** The last estimate operation associated with the eDiscovery search. */
    private _lastEstimateStatisticsOperation?: EdiscoveryEstimateOperation | AdminMember1 | undefined;
    /** noncustodialDataSource sources that are included in the eDiscovery search */
    private _noncustodialSources?: EdiscoveryNoncustodialDataSource[] | undefined;
    /**
     * Gets the additionalSources property value. Adds an additional source to the eDiscovery search.
     * @returns a dataSource
     */
    public get additionalSources() {
        return this._additionalSources;
    };
    /**
     * Sets the additionalSources property value. Adds an additional source to the eDiscovery search.
     * @param value Value to set for the additionalSources property.
     */
    public set additionalSources(value: DataSource[] | undefined) {
        this._additionalSources = value;
    };
    /**
     * Gets the addToReviewSetOperation property value. Adds the results of the eDiscovery search to the specified reviewSet.
     * @returns a admin
     */
    public get addToReviewSetOperation() {
        return this._addToReviewSetOperation;
    };
    /**
     * Sets the addToReviewSetOperation property value. Adds the results of the eDiscovery search to the specified reviewSet.
     * @param value Value to set for the addToReviewSetOperation property.
     */
    public set addToReviewSetOperation(value: EdiscoveryAddToReviewSetOperation | AdminMember1 | undefined) {
        this._addToReviewSetOperation = value;
    };
    /**
     * Instantiates a new EdiscoverySearch and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the custodianSources property value. Custodian sources that are included in the eDiscovery search.
     * @returns a dataSource
     */
    public get custodianSources() {
        return this._custodianSources;
    };
    /**
     * Sets the custodianSources property value. Custodian sources that are included in the eDiscovery search.
     * @param value Value to set for the custodianSources property.
     */
    public set custodianSources(value: DataSource[] | undefined) {
        this._custodianSources = value;
    };
    /**
     * Gets the dataSourceScopes property value. When specified, the collection will span across a service for an entire workload. Possible values are: none, allTenantMailboxes, allTenantSites, allCaseCustodians, allCaseNoncustodialDataSources.
     * @returns a admin
     */
    public get dataSourceScopes() {
        return this._dataSourceScopes;
    };
    /**
     * Sets the dataSourceScopes property value. When specified, the collection will span across a service for an entire workload. Possible values are: none, allTenantMailboxes, allTenantSites, allCaseCustodians, allCaseNoncustodialDataSources.
     * @param value Value to set for the dataSourceScopes property.
     */
    public set dataSourceScopes(value: DataSourceScopes | AdminMember1 | undefined) {
        this._dataSourceScopes = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "additionalSources": n => { this.additionalSources = n.getCollectionOfObjectValues<DataSource>(createDataSourceFromDiscriminatorValue); },
            "addToReviewSetOperation": n => { this.addToReviewSetOperation = n.getObjectValue<EdiscoveryAddToReviewSetOperation>(createEdiscoveryAddToReviewSetOperationFromDiscriminatorValue); },
            "custodianSources": n => { this.custodianSources = n.getCollectionOfObjectValues<DataSource>(createDataSourceFromDiscriminatorValue); },
            "dataSourceScopes": n => { this.dataSourceScopes = n.getObjectValue<DataSourceScopes>(createDataSourceScopesFromDiscriminatorValue); },
            "lastEstimateStatisticsOperation": n => { this.lastEstimateStatisticsOperation = n.getObjectValue<EdiscoveryEstimateOperation>(createEdiscoveryEstimateOperationFromDiscriminatorValue); },
            "noncustodialSources": n => { this.noncustodialSources = n.getCollectionOfObjectValues<EdiscoveryNoncustodialDataSource>(createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastEstimateStatisticsOperation property value. The last estimate operation associated with the eDiscovery search.
     * @returns a admin
     */
    public get lastEstimateStatisticsOperation() {
        return this._lastEstimateStatisticsOperation;
    };
    /**
     * Sets the lastEstimateStatisticsOperation property value. The last estimate operation associated with the eDiscovery search.
     * @param value Value to set for the lastEstimateStatisticsOperation property.
     */
    public set lastEstimateStatisticsOperation(value: EdiscoveryEstimateOperation | AdminMember1 | undefined) {
        this._lastEstimateStatisticsOperation = value;
    };
    /**
     * Gets the noncustodialSources property value. noncustodialDataSource sources that are included in the eDiscovery search
     * @returns a ediscoveryNoncustodialDataSource
     */
    public get noncustodialSources() {
        return this._noncustodialSources;
    };
    /**
     * Sets the noncustodialSources property value. noncustodialDataSource sources that are included in the eDiscovery search
     * @param value Value to set for the noncustodialSources property.
     */
    public set noncustodialSources(value: EdiscoveryNoncustodialDataSource[] | undefined) {
        this._noncustodialSources = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<DataSource>("additionalSources", this.additionalSources);
        writer.writeObjectValue<EdiscoveryAddToReviewSetOperation>("addToReviewSetOperation", this.addToReviewSetOperation);
        writer.writeCollectionOfObjectValues<DataSource>("custodianSources", this.custodianSources);
        writer.writeObjectValue<DataSourceScopes>("dataSourceScopes", this.dataSourceScopes);
        writer.writeObjectValue<EdiscoveryEstimateOperation>("lastEstimateStatisticsOperation", this.lastEstimateStatisticsOperation);
        writer.writeCollectionOfObjectValues<EdiscoveryNoncustodialDataSource>("noncustodialSources", this.noncustodialSources);
    };
}
