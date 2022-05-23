import {createInvitationFromDiscriminatorValue} from './createInvitationFromDiscriminatorValue';
import {InvitationImpl} from './index';
import {Invitation} from './invitation';
import {InvitationCollectionResponse} from './invitationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class InvitationCollectionResponseImpl implements AdditionalDataHolder, InvitationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Invitation[] | undefined;
    /**
     * Instantiates a new InvitationCollectionResponse and sets the default values.
     * @param invitationCollectionResponseParameterValue 
     */
    public constructor(invitationCollectionResponseParameterValue?: InvitationCollectionResponse | undefined) {
        this.additionalData = invitationCollectionResponseParameterValue?.additionalData ? invitationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = invitationCollectionResponseParameterValue?.nextLink ;
        this.value = invitationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<InvitationImpl>(createInvitationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: InvitationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new InvitationImpl(element));});
        writer.writeCollectionOfObjectValues<InvitationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
