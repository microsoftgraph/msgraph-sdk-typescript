import {Entity, IdentitySet} from '../';
import {DataSourceHoldStatus} from './dataSourceHoldStatus';
import {AdminMember1} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class DataSource extends Entity implements Parsable {
    /** The user who created the dataSource. */
    private _createdBy?: IdentitySet | AdminMember1 | undefined;
    /** The date and time the dataSource was created. */
    private _createdDateTime?: Date | undefined;
    /** The display name of the dataSource. This will be the name of the SharePoint site. */
    private _displayName?: string | undefined;
    /** The hold status of the dataSource.The possible values are: notApplied, applied, applying, removing, partial */
    private _holdStatus?: DataSourceHoldStatus | AdminMember1 | undefined;
    /**
     * Instantiates a new dataSource and sets the default values.
     */
    public constructor() {
        super();
        this.type = "#microsoft.graph.security.dataSource";
    };
    /**
     * Gets the createdBy property value. The user who created the dataSource.
     * @returns a admin
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The user who created the dataSource.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | AdminMember1 | undefined) {
        this._createdBy = value;
    };
    /**
     * Gets the createdDateTime property value. The date and time the dataSource was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The date and time the dataSource was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the displayName property value. The display name of the dataSource. This will be the name of the SharePoint site.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the dataSource. This will be the name of the SharePoint site.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "holdStatus": n => { this.holdStatus = n.getObjectValue<DataSourceHoldStatus>(createDataSourceHoldStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the holdStatus property value. The hold status of the dataSource.The possible values are: notApplied, applied, applying, removing, partial
     * @returns a admin
     */
    public get holdStatus() {
        return this._holdStatus;
    };
    /**
     * Sets the holdStatus property value. The hold status of the dataSource.The possible values are: notApplied, applied, applying, removing, partial
     * @param value Value to set for the holdStatus property.
     */
    public set holdStatus(value: DataSourceHoldStatus | AdminMember1 | undefined) {
        this._holdStatus = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue<DataSourceHoldStatus>("holdStatus", this.holdStatus);
    };
}
