import {createSecureScoreFromDiscriminatorValue} from './createSecureScoreFromDiscriminatorValue';
import {SecureScoreImpl} from './index';
import {SecureScore} from './secureScore';
import {SecureScoreCollectionResponse} from './secureScoreCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecureScoreCollectionResponseImpl implements AdditionalDataHolder, Parsable, SecureScoreCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: SecureScore[] | undefined;
    /**
     * Instantiates a new SecureScoreCollectionResponse and sets the default values.
     * @param secureScoreCollectionResponseParameterValue 
     */
    public constructor(secureScoreCollectionResponseParameterValue?: SecureScoreCollectionResponse | undefined) {
        this.additionalData = secureScoreCollectionResponseParameterValue?.additionalData ? secureScoreCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = secureScoreCollectionResponseParameterValue?.nextLink ;
        this.value = secureScoreCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SecureScoreImpl>(createSecureScoreFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: SecureScoreImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SecureScoreImpl(element));});
        writer.writeCollectionOfObjectValues<SecureScoreImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
