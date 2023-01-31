import {createWindows10EndpointProtectionConfigurationFromDiscriminatorValue} from './createWindows10EndpointProtectionConfigurationFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, Windows10EndpointProtectionConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Windows10EndpointProtectionConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: Windows10EndpointProtectionConfiguration[] | undefined;
    /**
     * Instantiates a new Windows10EndpointProtectionConfigurationCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<Windows10EndpointProtectionConfiguration>(createWindows10EndpointProtectionConfigurationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<Windows10EndpointProtectionConfiguration>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a windows10EndpointProtectionConfiguration
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: Windows10EndpointProtectionConfiguration[] | undefined) {
        this._value = value;
    };
}
