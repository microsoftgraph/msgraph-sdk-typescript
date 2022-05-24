import {createSecureScoreControlProfileFromDiscriminatorValue} from './createSecureScoreControlProfileFromDiscriminatorValue';
import {SecureScoreControlProfileImpl} from './index';
import {SecureScoreControlProfile} from './secureScoreControlProfile';
import {SecureScoreControlProfileCollectionResponse} from './secureScoreControlProfileCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SecureScoreControlProfileCollectionResponseImpl implements AdditionalDataHolder, Parsable, SecureScoreControlProfileCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: SecureScoreControlProfile[] | undefined;
    /**
     * Instantiates a new SecureScoreControlProfileCollectionResponse and sets the default values.
     * @param secureScoreControlProfileCollectionResponseParameterValue 
     */
    public constructor(secureScoreControlProfileCollectionResponseParameterValue?: SecureScoreControlProfileCollectionResponse | undefined) {
        this.additionalData = secureScoreControlProfileCollectionResponseParameterValue?.additionalData ? secureScoreControlProfileCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = secureScoreControlProfileCollectionResponseParameterValue?.nextLink ;
        this.value = secureScoreControlProfileCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<SecureScoreControlProfileImpl>(createSecureScoreControlProfileFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: SecureScoreControlProfileImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new SecureScoreControlProfileImpl(element));});
        writer.writeCollectionOfObjectValues<SecureScoreControlProfileImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
