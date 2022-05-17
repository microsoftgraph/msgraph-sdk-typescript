import {InvitationParticipantInfoImpl} from '../../../../models/';
import {createInvitationParticipantInfoFromDiscriminatorValue} from '../../../../models/createInvitationParticipantInfoFromDiscriminatorValue';
import {InvitationParticipantInfo} from '../../../../models/invitationParticipantInfo';
import {RedirectRequestBody} from './redirectRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the redirect method. */
export class RedirectRequestBodyImpl implements AdditionalDataHolder, Parsable, RedirectRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The callbackUri property */
    callbackUri?: string | undefined;
    /** The targets property */
    targets?: InvitationParticipantInfo[] | undefined;
    /** The timeout property */
    timeout?: number | undefined;
    /**
     * Instantiates a new redirectRequestBody and sets the default values.
     * @param redirectRequestBodyParameterValue 
     */
    public constructor(redirectRequestBodyParameterValue?: RedirectRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = redirectRequestBodyParameterValue?.additionalData ? {} : redirectRequestBodyParameterValue?.additionalData!
        this.callbackUri = redirectRequestBodyParameterValue?.callbackUri ;
        this.targets = redirectRequestBodyParameterValue?.targets ;
        this.timeout = redirectRequestBodyParameterValue?.timeout ;
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
        if(this.callbackUri)
        writer.writeStringValue("callbackUri", this.callbackUri);
        }
        if(this.targets){
        const targetsArrValue: InvitationParticipantInfoImpl[] = []; this.targets?.forEach(element => {targetsArrValue.push(new InvitationParticipantInfoImpl(element));});
        writer.writeCollectionOfObjectValues<InvitationParticipantInfoImpl>("targets", targetsArrValue);
        }
        if(this.timeout){
        if(this.timeout)
        writer.writeNumberValue("timeout", this.timeout);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
