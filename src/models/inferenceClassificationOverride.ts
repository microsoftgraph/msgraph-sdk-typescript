import {AdminMember1, EmailAddress, Entity} from './index';
import {InferenceClassificationType} from './inferenceClassificationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the admin singleton. */
export class InferenceClassificationOverride extends Entity implements Parsable {
    /** Specifies how incoming messages from a specific sender should always be classified as. Possible values are: focused, other. */
    private _classifyAs?: InferenceClassificationType | AdminMember1 | undefined;
    /** The email address information of the sender for whom the override is created. */
    private _senderEmailAddress?: EmailAddress | AdminMember1 | undefined;
    /**
     * Gets the classifyAs property value. Specifies how incoming messages from a specific sender should always be classified as. Possible values are: focused, other.
     * @returns a admin
     */
    public get classifyAs() {
        return this._classifyAs;
    };
    /**
     * Sets the classifyAs property value. Specifies how incoming messages from a specific sender should always be classified as. Possible values are: focused, other.
     * @param value Value to set for the classifyAs property.
     */
    public set classifyAs(value: InferenceClassificationType | AdminMember1 | undefined) {
        this._classifyAs = value;
    };
    /**
     * Instantiates a new inferenceClassificationOverride and sets the default values.
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
            "classifyAs": n => { this.classifyAs = n.getObjectValue<InferenceClassificationType>(createInferenceClassificationTypeFromDiscriminatorValue); },
            "senderEmailAddress": n => { this.senderEmailAddress = n.getObjectValue<EmailAddress>(createEmailAddressFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the senderEmailAddress property value. The email address information of the sender for whom the override is created.
     * @returns a admin
     */
    public get senderEmailAddress() {
        return this._senderEmailAddress;
    };
    /**
     * Sets the senderEmailAddress property value. The email address information of the sender for whom the override is created.
     * @param value Value to set for the senderEmailAddress property.
     */
    public set senderEmailAddress(value: EmailAddress | AdminMember1 | undefined) {
        this._senderEmailAddress = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<InferenceClassificationType>("classifyAs", this.classifyAs);
        writer.writeObjectValue<EmailAddress>("senderEmailAddress", this.senderEmailAddress);
    };
}
