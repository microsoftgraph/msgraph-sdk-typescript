import {createAndroidWorkProfileCompliancePolicyFromDiscriminatorValue} from './createAndroidWorkProfileCompliancePolicyFromDiscriminatorValue';
import {AndroidWorkProfileCompliancePolicy, BaseCollectionPaginationCountResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AndroidWorkProfileCompliancePolicyCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: AndroidWorkProfileCompliancePolicy[] | undefined;
    /**
     * Instantiates a new AndroidWorkProfileCompliancePolicyCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<AndroidWorkProfileCompliancePolicy>(createAndroidWorkProfileCompliancePolicyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AndroidWorkProfileCompliancePolicy>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a androidWorkProfileCompliancePolicy
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: AndroidWorkProfileCompliancePolicy[] | undefined) {
        this._value = value;
    };
}
