import {createDataSourceFromDiscriminatorValue} from './createDataSourceFromDiscriminatorValue';
import {createEdiscoveryIndexOperationFromDiscriminatorValue} from './createEdiscoveryIndexOperationFromDiscriminatorValue';
import {DataSource, DataSourceContainer, EdiscoveryIndexOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class EdiscoveryNoncustodialDataSource extends DataSourceContainer implements Parsable {
    /** User source or SharePoint site data source as non-custodial data source. */
    private _dataSource?: DataSource | undefined;
    /** Operation entity that represents the latest indexing for the non-custodial data source. */
    private _lastIndexOperation?: EdiscoveryIndexOperation | undefined;
    /**
     * Instantiates a new ediscoveryNoncustodialDataSource and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the dataSource property value. User source or SharePoint site data source as non-custodial data source.
     * @returns a dataSource
     */
    public get dataSource() {
        return this._dataSource;
    };
    /**
     * Sets the dataSource property value. User source or SharePoint site data source as non-custodial data source.
     * @param value Value to set for the dataSource property.
     */
    public set dataSource(value: DataSource | undefined) {
        this._dataSource = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "dataSource": n => { this.dataSource = n.getObjectValue<DataSource>(createDataSourceFromDiscriminatorValue); },
            "lastIndexOperation": n => { this.lastIndexOperation = n.getObjectValue<EdiscoveryIndexOperation>(createEdiscoveryIndexOperationFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the lastIndexOperation property value. Operation entity that represents the latest indexing for the non-custodial data source.
     * @returns a ediscoveryIndexOperation
     */
    public get lastIndexOperation() {
        return this._lastIndexOperation;
    };
    /**
     * Sets the lastIndexOperation property value. Operation entity that represents the latest indexing for the non-custodial data source.
     * @param value Value to set for the lastIndexOperation property.
     */
    public set lastIndexOperation(value: EdiscoveryIndexOperation | undefined) {
        this._lastIndexOperation = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<DataSource>("dataSource", this.dataSource);
        writer.writeObjectValue<EdiscoveryIndexOperation>("lastIndexOperation", this.lastIndexOperation);
    };
}
