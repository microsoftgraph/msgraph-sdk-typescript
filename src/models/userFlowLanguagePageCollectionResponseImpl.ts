import {createUserFlowLanguagePageFromDiscriminatorValue} from './createUserFlowLanguagePageFromDiscriminatorValue';
import {UserFlowLanguagePageImpl} from './index';
import {UserFlowLanguagePage} from './userFlowLanguagePage';
import {UserFlowLanguagePageCollectionResponse} from './userFlowLanguagePageCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserFlowLanguagePageCollectionResponseImpl implements AdditionalDataHolder, Parsable, UserFlowLanguagePageCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UserFlowLanguagePage[] | undefined;
    /**
     * Instantiates a new UserFlowLanguagePageCollectionResponse and sets the default values.
     * @param userFlowLanguagePageCollectionResponseParameterValue 
     */
    public constructor(userFlowLanguagePageCollectionResponseParameterValue?: UserFlowLanguagePageCollectionResponse | undefined) {
        this.additionalData = userFlowLanguagePageCollectionResponseParameterValue?.additionalData ? userFlowLanguagePageCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = userFlowLanguagePageCollectionResponseParameterValue?.nextLink ;
        this.value = userFlowLanguagePageCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UserFlowLanguagePageImpl>(createUserFlowLanguagePageFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UserFlowLanguagePageImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UserFlowLanguagePageImpl(element));});
        writer.writeCollectionOfObjectValues<UserFlowLanguagePageImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
