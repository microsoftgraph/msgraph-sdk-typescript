import {createIdentityFromDiscriminatorValue} from './createIdentityFromDiscriminatorValue';
import {Identity} from './identity';
import {IdentityCollectionResponse} from './identityCollectionResponse';
import {IdentityImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class IdentityCollectionResponseImpl implements AdditionalDataHolder, IdentityCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Identity[] | undefined;
    /**
     * Instantiates a new IdentityCollectionResponse and sets the default values.
     * @param identityCollectionResponseParameterValue 
     */
    public constructor(identityCollectionResponseParameterValue?: IdentityCollectionResponse | undefined) {
        this.additionalData = identityCollectionResponseParameterValue?.additionalData ? identityCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = identityCollectionResponseParameterValue?.nextLink ;
        this.value = identityCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<IdentityImpl>(createIdentityFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: IdentityImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new IdentityImpl(element));});
        writer.writeCollectionOfObjectValues<IdentityImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
