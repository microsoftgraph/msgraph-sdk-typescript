import {SharePostRequestBody} from './sharePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the share method. */
export class SharePostRequestBodyImpl implements SharePostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The endDateTime property */
    private _endDateTime?: Date | undefined;
    /** The notifyTeam property */
    private _notifyTeam?: boolean | undefined;
    /** The startDateTime property */
    private _startDateTime?: Date | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new sharePostRequestBody and sets the default values.
     * @param sharePostRequestBodyParameterValue 
     */
    public constructor(sharePostRequestBodyParameterValue?: SharePostRequestBody | undefined) {
        this._additionalData = sharePostRequestBodyParameterValue?.additionalData ? sharePostRequestBodyParameterValue?.additionalData! : {};
        this._endDateTime = sharePostRequestBodyParameterValue?.endDateTime;
        this._notifyTeam = sharePostRequestBodyParameterValue?.notifyTeam;
        this._startDateTime = sharePostRequestBodyParameterValue?.startDateTime;
    };
    /**
     * Gets the endDateTime property value. The endDateTime property
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The endDateTime property
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        if(value) {
            this._endDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "notifyTeam": n => { this.notifyTeam = n.getBooleanValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the notifyTeam property value. The notifyTeam property
     * @returns a boolean
     */
    public get notifyTeam() {
        return this._notifyTeam;
    };
    /**
     * Sets the notifyTeam property value. The notifyTeam property
     * @param value Value to set for the notifyTeam property.
     */
    public set notifyTeam(value: boolean | undefined) {
        if(value) {
            this._notifyTeam = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.endDateTime){
            writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.notifyTeam){
            writer.writeBooleanValue("notifyTeam", this.notifyTeam);
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startDateTime property value. The startDateTime property
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The startDateTime property
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        if(value) {
            this._startDateTime = value;
        }
    };
}
