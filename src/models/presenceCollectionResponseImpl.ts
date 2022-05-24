import {createPresenceFromDiscriminatorValue} from './createPresenceFromDiscriminatorValue';
import {PresenceImpl} from './index';
import {Presence} from './presence';
import {PresenceCollectionResponse} from './presenceCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PresenceCollectionResponseImpl implements AdditionalDataHolder, Parsable, PresenceCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Presence[] | undefined;
    /**
     * Instantiates a new PresenceCollectionResponse and sets the default values.
     * @param presenceCollectionResponseParameterValue 
     */
    public constructor(presenceCollectionResponseParameterValue?: PresenceCollectionResponse | undefined) {
        this.additionalData = presenceCollectionResponseParameterValue?.additionalData ? presenceCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = presenceCollectionResponseParameterValue?.nextLink ;
        this.value = presenceCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<PresenceImpl>(createPresenceFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: PresenceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new PresenceImpl(element));});
        writer.writeCollectionOfObjectValues<PresenceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
