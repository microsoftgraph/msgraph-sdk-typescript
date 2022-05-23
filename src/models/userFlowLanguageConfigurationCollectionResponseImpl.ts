import {createUserFlowLanguageConfigurationFromDiscriminatorValue} from './createUserFlowLanguageConfigurationFromDiscriminatorValue';
import {UserFlowLanguageConfigurationImpl} from './index';
import {UserFlowLanguageConfiguration} from './userFlowLanguageConfiguration';
import {UserFlowLanguageConfigurationCollectionResponse} from './userFlowLanguageConfigurationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserFlowLanguageConfigurationCollectionResponseImpl implements AdditionalDataHolder, Parsable, UserFlowLanguageConfigurationCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: UserFlowLanguageConfiguration[] | undefined;
    /**
     * Instantiates a new UserFlowLanguageConfigurationCollectionResponse and sets the default values.
     * @param userFlowLanguageConfigurationCollectionResponseParameterValue 
     */
    public constructor(userFlowLanguageConfigurationCollectionResponseParameterValue?: UserFlowLanguageConfigurationCollectionResponse | undefined) {
        this.additionalData = userFlowLanguageConfigurationCollectionResponseParameterValue?.additionalData ? userFlowLanguageConfigurationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = userFlowLanguageConfigurationCollectionResponseParameterValue?.nextLink ;
        this.value = userFlowLanguageConfigurationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<UserFlowLanguageConfigurationImpl>(createUserFlowLanguageConfigurationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: UserFlowLanguageConfigurationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new UserFlowLanguageConfigurationImpl(element));});
        writer.writeCollectionOfObjectValues<UserFlowLanguageConfigurationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
