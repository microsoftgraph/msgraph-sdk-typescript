import {InvitationParticipantInfo} from '../../../../models/';
import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the redirect method.  */
export class RedirectRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData: Record<string, unknown>;
    /** The callbackUri property  */
    private _callbackUri?: string | undefined;
    /** The targets property  */
    private _targets?: InvitationParticipantInfo[] | undefined;
    /** The timeout property  */
    private _timeout?: number | undefined;
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
     * Instantiates a new redirectRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {
            "callbackUri": (o, n) => { (o as unknown as RedirectRequestBody).callbackUri = n.getStringValue(); },
            "targets": (o, n) => { (o as unknown as RedirectRequestBody).targets = n.getCollectionOfObjectValues<InvitationParticipantInfo>(createInvitationParticipantInfoFromDiscriminatorValue); },
            "timeout": (o, n) => { (o as unknown as RedirectRequestBody).timeout = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("callbackUri", this.callbackUri);
        writer.writeCollectionOfObjectValues<InvitationParticipantInfo>("targets", this.targets);
        writer.writeNumberValue("timeout", this.timeout);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the targets property value. The targets property
     * @returns a invitationParticipantInfo
     */
    public get targets() {
        return this._targets;
    };
    /**
     * Sets the targets property value. The targets property
     * @param value Value to set for the targets property.
     */
    public set targets(value: InvitationParticipantInfo[] | undefined) {
        this._targets = value;
    };
    /**
     * Gets the timeout property value. The timeout property
     * @returns a integer
     */
    public get timeout() {
        return this._timeout;
    };
    /**
     * Sets the timeout property value. The timeout property
     * @param value Value to set for the timeout property.
     */
    public set timeout(value: number | undefined) {
        this._timeout = value;
    };
}
