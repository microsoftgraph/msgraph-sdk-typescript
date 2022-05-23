import {createRiskyUserFromDiscriminatorValue} from './createRiskyUserFromDiscriminatorValue';
import {RiskyUserImpl} from './index';
import {RiskyUser} from './riskyUser';
import {RiskyUserCollectionResponse} from './riskyUserCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RiskyUserCollectionResponseImpl implements AdditionalDataHolder, Parsable, RiskyUserCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: RiskyUser[] | undefined;
    /**
     * Instantiates a new RiskyUserCollectionResponse and sets the default values.
     * @param riskyUserCollectionResponseParameterValue 
     */
    public constructor(riskyUserCollectionResponseParameterValue?: RiskyUserCollectionResponse | undefined) {
        this.additionalData = riskyUserCollectionResponseParameterValue?.additionalData ? riskyUserCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = riskyUserCollectionResponseParameterValue?.nextLink ;
        this.value = riskyUserCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<RiskyUserImpl>(createRiskyUserFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: RiskyUserImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new RiskyUserImpl(element));});
        writer.writeCollectionOfObjectValues<RiskyUserImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
