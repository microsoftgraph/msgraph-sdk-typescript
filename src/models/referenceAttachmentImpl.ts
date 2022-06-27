import {AttachmentImpl} from './index';
import {ReferenceAttachment} from './referenceAttachment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ReferenceAttachmentImpl extends AttachmentImpl implements ReferenceAttachment {
    /**
     * Instantiates a new ReferenceAttachment and sets the default values.
     * @param referenceAttachmentParameterValue 
     */
    public constructor(referenceAttachmentParameterValue?: ReferenceAttachment | undefined) {
        super(referenceAttachmentParameterValue);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
    };
}
