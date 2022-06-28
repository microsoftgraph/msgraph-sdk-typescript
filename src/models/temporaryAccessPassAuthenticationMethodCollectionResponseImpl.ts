import {createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue} from './createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue';
import {TemporaryAccessPassAuthenticationMethodImpl} from './index';
import {TemporaryAccessPassAuthenticationMethod} from './temporaryAccessPassAuthenticationMethod';
import {TemporaryAccessPassAuthenticationMethodCollectionResponse} from './temporaryAccessPassAuthenticationMethodCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TemporaryAccessPassAuthenticationMethodCollectionResponseImpl implements TemporaryAccessPassAuthenticationMethodCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TemporaryAccessPassAuthenticationMethod[] | undefined;
    /**
     * Instantiates a new TemporaryAccessPassAuthenticationMethodCollectionResponse and sets the default values.
     * @param temporaryAccessPassAuthenticationMethodCollectionResponseParameterValue 
     */
    public constructor(temporaryAccessPassAuthenticationMethodCollectionResponseParameterValue?: TemporaryAccessPassAuthenticationMethodCollectionResponse | undefined) {
        this.additionalData = temporaryAccessPassAuthenticationMethodCollectionResponseParameterValue?.additionalData ? temporaryAccessPassAuthenticationMethodCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = temporaryAccessPassAuthenticationMethodCollectionResponseParameterValue?.nextLink;
        this.value = temporaryAccessPassAuthenticationMethodCollectionResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TemporaryAccessPassAuthenticationMethodImpl>(createTemporaryAccessPassAuthenticationMethodFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TemporaryAccessPassAuthenticationMethodImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TemporaryAccessPassAuthenticationMethodImpl(element));});
            writer.writeCollectionOfObjectValues<TemporaryAccessPassAuthenticationMethodImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
