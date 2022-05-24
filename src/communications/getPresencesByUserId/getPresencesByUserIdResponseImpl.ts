import {PresenceImpl} from '../../models/';
import {createPresenceFromDiscriminatorValue} from '../../models/createPresenceFromDiscriminatorValue';
import {Presence} from '../../models/presence';
import {GetPresencesByUserIdResponse} from './getPresencesByUserIdResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getPresencesByUserId method. */
export class GetPresencesByUserIdResponseImpl implements AdditionalDataHolder, GetPresencesByUserIdResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: Presence[] | undefined;
    /**
     * Instantiates a new getPresencesByUserIdResponse and sets the default values.
     * @param getPresencesByUserIdResponseParameterValue 
     */
    public constructor(getPresencesByUserIdResponseParameterValue?: GetPresencesByUserIdResponse | undefined) {
        this.additionalData = getPresencesByUserIdResponseParameterValue?.additionalData ? getPresencesByUserIdResponseParameterValue?.additionalData! : {}
        this.value = getPresencesByUserIdResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<PresenceImpl>(createPresenceFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: PresenceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PresenceImpl(element));});
        writer.writeCollectionOfObjectValues<PresenceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
