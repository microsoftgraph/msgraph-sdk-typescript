import {Prompt} from '../../../../models/';
import {createPromptFromDiscriminatorValue} from '../../../../models/createPromptFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RecordResponsePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _bargeInAllowed?: boolean | undefined;
    private _clientContext?: string | undefined;
    private _initialSilenceTimeoutInSeconds?: number | undefined;
    private _maxRecordDurationInSeconds?: number | undefined;
    private _maxSilenceTimeoutInSeconds?: number | undefined;
    private _playBeep?: boolean | undefined;
    private _prompts?: Prompt[] | undefined;
    private _stopTones?: string[] | undefined;
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
     * Gets the bargeInAllowed property value. 
     * @returns a boolean
     */
    public get bargeInAllowed() {
        return this._bargeInAllowed;
    };
    /**
     * Sets the bargeInAllowed property value. 
     * @param value Value to set for the bargeInAllowed property.
     */
    public set bargeInAllowed(value: boolean | undefined) {
        this._bargeInAllowed = value;
    };
    /**
     * Gets the clientContext property value. 
     * @returns a string
     */
    public get clientContext() {
        return this._clientContext;
    };
    /**
     * Sets the clientContext property value. 
     * @param value Value to set for the clientContext property.
     */
    public set clientContext(value: string | undefined) {
        this._clientContext = value;
    };
    /**
     * Instantiates a new recordResponsePostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "bargeInAllowed": n => { this.bargeInAllowed = n.getBooleanValue(); },
            "clientContext": n => { this.clientContext = n.getStringValue(); },
            "initialSilenceTimeoutInSeconds": n => { this.initialSilenceTimeoutInSeconds = n.getNumberValue(); },
            "maxRecordDurationInSeconds": n => { this.maxRecordDurationInSeconds = n.getNumberValue(); },
            "maxSilenceTimeoutInSeconds": n => { this.maxSilenceTimeoutInSeconds = n.getNumberValue(); },
            "playBeep": n => { this.playBeep = n.getBooleanValue(); },
            "prompts": n => { this.prompts = n.getCollectionOfObjectValues<Prompt>(createPromptFromDiscriminatorValue); },
            "stopTones": n => { this.stopTones = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the initialSilenceTimeoutInSeconds property value. 
     * @returns a integer
     */
    public get initialSilenceTimeoutInSeconds() {
        return this._initialSilenceTimeoutInSeconds;
    };
    /**
     * Sets the initialSilenceTimeoutInSeconds property value. 
     * @param value Value to set for the initialSilenceTimeoutInSeconds property.
     */
    public set initialSilenceTimeoutInSeconds(value: number | undefined) {
        this._initialSilenceTimeoutInSeconds = value;
    };
    /**
     * Gets the maxRecordDurationInSeconds property value. 
     * @returns a integer
     */
    public get maxRecordDurationInSeconds() {
        return this._maxRecordDurationInSeconds;
    };
    /**
     * Sets the maxRecordDurationInSeconds property value. 
     * @param value Value to set for the maxRecordDurationInSeconds property.
     */
    public set maxRecordDurationInSeconds(value: number | undefined) {
        this._maxRecordDurationInSeconds = value;
    };
    /**
     * Gets the maxSilenceTimeoutInSeconds property value. 
     * @returns a integer
     */
    public get maxSilenceTimeoutInSeconds() {
        return this._maxSilenceTimeoutInSeconds;
    };
    /**
     * Sets the maxSilenceTimeoutInSeconds property value. 
     * @param value Value to set for the maxSilenceTimeoutInSeconds property.
     */
    public set maxSilenceTimeoutInSeconds(value: number | undefined) {
        this._maxSilenceTimeoutInSeconds = value;
    };
    /**
     * Gets the playBeep property value. 
     * @returns a boolean
     */
    public get playBeep() {
        return this._playBeep;
    };
    /**
     * Sets the playBeep property value. 
     * @param value Value to set for the playBeep property.
     */
    public set playBeep(value: boolean | undefined) {
        this._playBeep = value;
    };
    /**
     * Gets the prompts property value. 
     * @returns a prompt
     */
    public get prompts() {
        return this._prompts;
    };
    /**
     * Sets the prompts property value. 
     * @param value Value to set for the prompts property.
     */
    public set prompts(value: Prompt[] | undefined) {
        this._prompts = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("bargeInAllowed", this.bargeInAllowed);
        writer.writeStringValue("clientContext", this.clientContext);
        writer.writeNumberValue("initialSilenceTimeoutInSeconds", this.initialSilenceTimeoutInSeconds);
        writer.writeNumberValue("maxRecordDurationInSeconds", this.maxRecordDurationInSeconds);
        writer.writeNumberValue("maxSilenceTimeoutInSeconds", this.maxSilenceTimeoutInSeconds);
        writer.writeBooleanValue("playBeep", this.playBeep);
        writer.writeCollectionOfObjectValues<Prompt>("prompts", this.prompts);
        writer.writeCollectionOfPrimitiveValues<string>("stopTones", this.stopTones);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the stopTones property value. 
     * @returns a string
     */
    public get stopTones() {
        return this._stopTones;
    };
    /**
     * Sets the stopTones property value. 
     * @param value Value to set for the stopTones property.
     */
    public set stopTones(value: string[] | undefined) {
        this._stopTones = value;
    };
}
