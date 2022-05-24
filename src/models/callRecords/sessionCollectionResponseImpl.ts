import {createSessionFromDiscriminatorValue} from './createSessionFromDiscriminatorValue';
import {SessionImpl} from './index';
import {Session} from './session';
import {SessionCollectionResponse} from './sessionCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SessionCollectionResponseImpl implements AdditionalDataHolder, Parsable, SessionCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Session[] | undefined;
    /**
     * Instantiates a new SessionCollectionResponse and sets the default values.
     * @param sessionCollectionResponseParameterValue 
     */
    public constructor(sessionCollectionResponseParameterValue?: SessionCollectionResponse | undefined) {
        this.additionalData = sessionCollectionResponseParameterValue?.additionalData ? sessionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = sessionCollectionResponseParameterValue?.nextLink ;
        this.value = sessionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SessionImpl>(createSessionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: SessionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SessionImpl(element));});
        writer.writeCollectionOfObjectValues<SessionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
