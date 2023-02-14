import {createAccessPackageLocalizedTextFromDiscriminatorValue} from './createAccessPackageLocalizedTextFromDiscriminatorValue';
import {AccessPackageLocalizedText, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageQuestion extends Entity implements Parsable {
    /** Specifies whether the requestor is allowed to edit answers to questions for an assignment by posting an update to accessPackageAssignmentRequest. */
    private _isAnswerEditable?: boolean | undefined;
    /** Whether the requestor is required to supply an answer or not. */
    private _isRequired?: boolean | undefined;
    /** The text of the question represented in a format for a specific locale. */
    private _localizations?: AccessPackageLocalizedText[] | undefined;
    /** Relative position of this question when displaying a list of questions to the requestor. */
    private _sequence?: number | undefined;
    /** The text of the question to show to the requestor. */
    private _text?: string | undefined;
    /**
     * Instantiates a new accessPackageQuestion and sets the default values.
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
            "isAnswerEditable": n => { this.isAnswerEditable = n.getBooleanValue(); },
            "isRequired": n => { this.isRequired = n.getBooleanValue(); },
            "localizations": n => { this.localizations = n.getCollectionOfObjectValues<AccessPackageLocalizedText>(createAccessPackageLocalizedTextFromDiscriminatorValue); },
            "sequence": n => { this.sequence = n.getNumberValue(); },
            "text": n => { this.text = n.getStringValue(); },
        };
    };
    /**
     * Gets the isAnswerEditable property value. Specifies whether the requestor is allowed to edit answers to questions for an assignment by posting an update to accessPackageAssignmentRequest.
     * @returns a boolean
     */
    public get isAnswerEditable() {
        return this._isAnswerEditable;
    };
    /**
     * Sets the isAnswerEditable property value. Specifies whether the requestor is allowed to edit answers to questions for an assignment by posting an update to accessPackageAssignmentRequest.
     * @param value Value to set for the isAnswerEditable property.
     */
    public set isAnswerEditable(value: boolean | undefined) {
        this._isAnswerEditable = value;
    };
    /**
     * Gets the isRequired property value. Whether the requestor is required to supply an answer or not.
     * @returns a boolean
     */
    public get isRequired() {
        return this._isRequired;
    };
    /**
     * Sets the isRequired property value. Whether the requestor is required to supply an answer or not.
     * @param value Value to set for the isRequired property.
     */
    public set isRequired(value: boolean | undefined) {
        this._isRequired = value;
    };
    /**
     * Gets the localizations property value. The text of the question represented in a format for a specific locale.
     * @returns a accessPackageLocalizedText
     */
    public get localizations() {
        return this._localizations;
    };
    /**
     * Sets the localizations property value. The text of the question represented in a format for a specific locale.
     * @param value Value to set for the localizations property.
     */
    public set localizations(value: AccessPackageLocalizedText[] | undefined) {
        this._localizations = value;
    };
    /**
     * Gets the sequence property value. Relative position of this question when displaying a list of questions to the requestor.
     * @returns a integer
     */
    public get sequence() {
        return this._sequence;
    };
    /**
     * Sets the sequence property value. Relative position of this question when displaying a list of questions to the requestor.
     * @param value Value to set for the sequence property.
     */
    public set sequence(value: number | undefined) {
        this._sequence = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("isAnswerEditable", this.isAnswerEditable);
        writer.writeBooleanValue("isRequired", this.isRequired);
        writer.writeCollectionOfObjectValues<AccessPackageLocalizedText>("localizations", this.localizations);
        writer.writeNumberValue("sequence", this.sequence);
        writer.writeStringValue("text", this.text);
    };
    /**
     * Gets the text property value. The text of the question to show to the requestor.
     * @returns a string
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. The text of the question to show to the requestor.
     * @param value Value to set for the text property.
     */
    public set text(value: string | undefined) {
        this._text = value;
    };
}
