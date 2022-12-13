import {createMobileAppFromDiscriminatorValue} from './createMobileAppFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, MobileApp} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mobileApps property of the microsoft.graph.deviceAppManagement entity.
 */
export class MobileAppCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: MobileApp[] | undefined;
    /**
     * Instantiates a new MobileAppCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<MobileApp>(createMobileAppFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<MobileApp>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a mobileApp
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: MobileApp[] | undefined) {
        this._value = value;
    };
}
