import {createEducationItemBodyFromDiscriminatorValue} from './createEducationItemBodyFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {EducationItemBody, IdentitySet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationFeedback implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** User who created the feedback. */
    private _feedbackBy?: IdentitySet | undefined;
    /** Moment in time when the feedback was given. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _feedbackDateTime?: Date | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** Feedback. */
    private _text?: EducationItemBody | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new educationFeedback and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.educationFeedback";
    };
    /**
     * Gets the feedbackBy property value. User who created the feedback.
     * @returns a identitySet
     */
    public get feedbackBy() {
        return this._feedbackBy;
    };
    /**
     * Sets the feedbackBy property value. User who created the feedback.
     * @param value Value to set for the feedbackBy property.
     */
    public set feedbackBy(value: IdentitySet | undefined) {
        this._feedbackBy = value;
    };
    /**
     * Gets the feedbackDateTime property value. Moment in time when the feedback was given. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get feedbackDateTime() {
        return this._feedbackDateTime;
    };
    /**
     * Sets the feedbackDateTime property value. Moment in time when the feedback was given. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the feedbackDateTime property.
     */
    public set feedbackDateTime(value: Date | undefined) {
        this._feedbackDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "feedbackBy": n => { this.feedbackBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "feedbackDateTime": n => { this.feedbackDateTime = n.getDateValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "text": n => { this.text = n.getObjectValue<EducationItemBody>(createEducationItemBodyFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<IdentitySet>("feedbackBy", this.feedbackBy);
        writer.writeDateValue("feedbackDateTime", this.feedbackDateTime);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeObjectValue<EducationItemBody>("text", this.text);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the text property value. Feedback.
     * @returns a educationItemBody
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. Feedback.
     * @param value Value to set for the text property.
     */
    public set text(value: EducationItemBody | undefined) {
        this._text = value;
    };
}
