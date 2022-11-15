import {createProvisioningObjectSummaryFromDiscriminatorValue} from './createProvisioningObjectSummaryFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, ProvisioningObjectSummary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the provisioning property of the microsoft.graph.auditLogRoot entity. */
export class ProvisioningObjectSummaryCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: ProvisioningObjectSummary[] | undefined;
    /**
     * Instantiates a new ProvisioningObjectSummaryCollectionResponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "value": n => { this.value = n.getCollectionOfObjectValues<ProvisioningObjectSummary>(createProvisioningObjectSummaryFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<ProvisioningObjectSummary>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a provisioningObjectSummary
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: ProvisioningObjectSummary[] | undefined) {
        this._value = value;
    };
}
