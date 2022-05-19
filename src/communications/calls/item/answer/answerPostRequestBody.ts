import {IncomingCallOptions, MediaConfig} from '../../../../models/';
import {createIncomingCallOptionsFromDiscriminatorValue} from '../../../../models/createIncomingCallOptionsFromDiscriminatorValue';
import {createMediaConfigFromDiscriminatorValue} from '../../../../models/createMediaConfigFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the answer method. */
export class AnswerPostRequestBody implements AdditionalDataHolder, Parsable {
    /** The acceptedModalities property */
    private _acceptedModalities?: string[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The callbackUri property */
    private _callbackUri?: string | undefined;
    /** The callOptions property */
    private _callOptions?: IncomingCallOptions | undefined;
    /** The mediaConfig property */
    private _mediaConfig?: MediaConfig | undefined;
    /** The participantCapacity property */
    private _participantCapacity?: number | undefined;
    /**
     * Gets the acceptedModalities property value. The acceptedModalities property
     * @returns a string
     */
    public get acceptedModalities() {
        return this._acceptedModalities;
    };
    /**
     * Sets the acceptedModalities property value. The acceptedModalities property
     * @param value Value to set for the acceptedModalities property.
     */
    public set acceptedModalities(value: string[] | undefined) {
        this._acceptedModalities = value;
    };
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
     * Gets the callbackUri property value. The callbackUri property
     * @returns a string
     */
    public get callbackUri() {
        return this._callbackUri;
    };
    /**
     * Sets the callbackUri property value. The callbackUri property
     * @param value Value to set for the callbackUri property.
     */
    public set callbackUri(value: string | undefined) {
        this._callbackUri = value;
    };
    /**
     * Gets the callOptions property value. The callOptions property
     * @returns a incomingCallOptions
     */
    public get callOptions() {
        return this._callOptions;
    };
    /**
     * Sets the callOptions property value. The callOptions property
     * @param value Value to set for the callOptions property.
     */
    public set callOptions(value: IncomingCallOptions | undefined) {
        this._callOptions = value;
    };
    /**
     * Instantiates a new answerPostRequestBody and sets the default values.
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
            "acceptedModalities": n => { this.acceptedModalities = n.getCollectionOfPrimitiveValues<string>(); },
            "callbackUri": n => { this.callbackUri = n.getStringValue(); },
            "callOptions": n => { this.callOptions = n.getObjectValue<IncomingCallOptions>(createIncomingCallOptionsFromDiscriminatorValue); },
            "mediaConfig": n => { this.mediaConfig = n.getObjectValue<MediaConfig>(createMediaConfigFromDiscriminatorValue); },
            "participantCapacity": n => { this.participantCapacity = n.getNumberValue(); },
        };
    };
    /**
     * Gets the mediaConfig property value. The mediaConfig property
     * @returns a mediaConfig
     */
    public get mediaConfig() {
        return this._mediaConfig;
    };
    /**
     * Sets the mediaConfig property value. The mediaConfig property
     * @param value Value to set for the mediaConfig property.
     */
    public set mediaConfig(value: MediaConfig | undefined) {
        this._mediaConfig = value;
    };
    /**
     * Gets the participantCapacity property value. The participantCapacity property
     * @returns a integer
     */
    public get participantCapacity() {
        return this._participantCapacity;
    };
    /**
     * Sets the participantCapacity property value. The participantCapacity property
     * @param value Value to set for the participantCapacity property.
     */
    public set participantCapacity(value: number | undefined) {
        this._participantCapacity = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("acceptedModalities", this.acceptedModalities);
        writer.writeStringValue("callbackUri", this.callbackUri);
        writer.writeObjectValue<IncomingCallOptions>("callOptions", this.callOptions);
        writer.writeObjectValue<MediaConfig>("mediaConfig", this.mediaConfig);
        writer.writeNumberValue("participantCapacity", this.participantCapacity);
        writer.writeAdditionalData(this.additionalData);
    };
}
