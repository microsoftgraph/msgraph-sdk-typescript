import {InvitationParticipantInfoImpl} from '../../../../models/';
import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import {InvitationParticipantInfo} from '../../../../models/invitationParticipantInfo';
import {RedirectPostRequestBody} from './redirectPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the redirect method. */
export class RedirectPostRequestBodyImpl implements AdditionalDataHolder, Parsable, RedirectPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The callbackUri property */
    public callbackUri?: string | undefined;
    /** The targets property */
    public targets?: InvitationParticipantInfo[] | undefined;
    /** The timeout property */
    public timeout?: number | undefined;
    /**
     * Instantiates a new redirectPostRequestBody and sets the default values.
     * @param redirectPostRequestBodyParameterValue 
     */
    public constructor(redirectPostRequestBodyParameterValue?: RedirectPostRequestBody | undefined) {
        this.additionalData = redirectPostRequestBodyParameterValue?.additionalData ? redirectPostRequestBodyParameterValue?.additionalData! : {}
        this.callbackUri = redirectPostRequestBodyParameterValue?.callbackUri ;
        this.targets = redirectPostRequestBodyParameterValue?.targets ;
        this.timeout = redirectPostRequestBodyParameterValue?.timeout ;
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
        if(this.targets && this.targets.length != 0){        const targetsArrValue: InvitationParticipantInfoImpl[] = []; this.targets?.forEach(element => {targetsArrValue.push(new InvitationParticipantInfoImpl(element));});
        writer.writeCollectionOfObjectValues<InvitationParticipantInfoImpl>("targets", targetsArrValue);
        }
        if(this.timeout){
        writer.writeNumberValue("timeout", this.timeout);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
