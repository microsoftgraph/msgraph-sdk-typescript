import {Extension} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OpenTypeExtension extends Extension implements Parsable {
    /** A unique text identifier for an open type data extension. Optional. */
    private _extensionName?: string | undefined;
    /**
     * Instantiates a new OpenTypeExtension and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.openTypeExtension";
    };
    /**
     * Gets the extensionName property value. A unique text identifier for an open type data extension. Optional.
     * @returns a string
     */
    public get extensionName() {
        return this._extensionName;
    };
    /**
     * Sets the extensionName property value. A unique text identifier for an open type data extension. Optional.
     * @param value Value to set for the extensionName property.
     */
    public set extensionName(value: string | undefined) {
        this._extensionName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "extensionName": n => { this.extensionName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("extensionName", this.extensionName);
    };
}
