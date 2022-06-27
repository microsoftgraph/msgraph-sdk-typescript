import {ExtensionImpl} from './index';
import {OpenTypeExtension} from './openTypeExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class OpenTypeExtensionImpl extends ExtensionImpl implements OpenTypeExtension {
    /** A unique text identifier for an open type data extension. Required. */
    public extensionName?: string | undefined;
    /**
     * Instantiates a new OpenTypeExtension and sets the default values.
     * @param openTypeExtensionParameterValue 
     */
    public constructor(openTypeExtensionParameterValue?: OpenTypeExtension | undefined) {
        super(openTypeExtensionParameterValue);
        this.extensionName = openTypeExtensionParameterValue?.extensionName;
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
        if(this.extensionName){
            writer.writeStringValue("extensionName", this.extensionName);
        }
    };
}
