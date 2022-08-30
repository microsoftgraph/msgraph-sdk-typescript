import {createKeyValuePairFromDiscriminatorValue} from './createKeyValuePairFromDiscriminatorValue';
import {KeyValuePair, ManagedAppPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedAppConfiguration extends ManagedAppPolicy implements Parsable {
    /** A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service */
    private _customSettings?: KeyValuePair[] | undefined;
    /**
     * Instantiates a new ManagedAppConfiguration and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.managedAppConfiguration";
    };
    /**
     * Gets the customSettings property value. A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service
     * @returns a keyValuePair
     */
    public get customSettings() {
        return this._customSettings;
    };
    /**
     * Sets the customSettings property value. A set of string key and string value pairs to be sent to apps for users to whom the configuration is scoped, unalterned by this service
     * @param value Value to set for the customSettings property.
     */
    public set customSettings(value: KeyValuePair[] | undefined) {
        this._customSettings = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "customSettings": n => { this.customSettings = n.getCollectionOfObjectValues<KeyValuePair>(createKeyValuePairFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<KeyValuePair>("customSettings", this.customSettings);
    };
}
