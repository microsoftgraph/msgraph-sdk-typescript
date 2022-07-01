import {InvitationParticipantInfoImpl} from '../../../../models/';
import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import {InvitationParticipantInfo} from '../../../../models/invitationParticipantInfo';
import {RedirectPostRequestBody} from './redirectPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the redirect method. */
export class RedirectPostRequestBodyImpl implements RedirectPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The callbackUri property */
    private _callbackUri?: string | undefined;
    /** The targets property */
    private _targets?: InvitationParticipantInfo[] | undefined;
    /** The timeout property */
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
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
        if(value) {
            this._callbackUri = value;
        }
    };
    /**
     * Instantiates a new redirectPostRequestBody and sets the default values.
     * @param redirectPostRequestBodyParameterValue 
     */
    public constructor(redirectPostRequestBodyParameterValue?: RedirectPostRequestBody | undefined) {
        this._additionalData = redirectPostRequestBodyParameterValue?.additionalData ? redirectPostRequestBodyParameterValue?.additionalData! : {};
        this._callbackUri = redirectPostRequestBodyParameterValue?.callbackUri;
        this._targets = redirectPostRequestBodyParameterValue?.targets;
        this._timeout = redirectPostRequestBodyParameterValue?.timeout;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "callbackUri": n => { this.callbackUri = n.getStringValue(); },
            "targets": n => { this.targets = n.getCollectionOfObjectValues<InvitationParticipantInfoImpl>(createInvitationParticipantInfoFromDiscriminatorValue); },
            "timeout": n => { this.timeout = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.callbackUri){
            writer.writeStringValue("callbackUri", this.callbackUri);
        }
        if(this.targets && this.targets.length != 0){        const targetsArrValue: InvitationParticipantInfoImpl[] = [];
        this.targets?.forEach(element => {
            targetsArrValue.push((element instanceof InvitationParticipantInfoImpl? element as InvitationParticipantInfoImpl:new InvitationParticipantInfoImpl(element)));
        });
            writer.writeCollectionOfObjectValues<InvitationParticipantInfoImpl>("targets", targetsArrValue);
        }
        if(this.timeout){
            writer.writeNumberValue("timeout", this.timeout);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the targets property value. The targets property
     * @returns a InvitationParticipantInfoInterface
     */
    public get targets() {
        return this._targets;
    };
    /**
     * Sets the targets property value. The targets property
     * @param value Value to set for the targets property.
     */
    public set targets(value: InvitationParticipantInfo[] | undefined) {
        if(value) {
            const targetsArrValue: InvitationParticipantInfoImpl[] = [];
            this.targets?.forEach(element => {
                targetsArrValue.push((element instanceof InvitationParticipantInfoImpl? element as InvitationParticipantInfoImpl:new InvitationParticipantInfoImpl(element)));
            });
            this._targets = targetsArrValue;
        }
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
        if(value) {
            this._timeout = value;
        }
    };
}
