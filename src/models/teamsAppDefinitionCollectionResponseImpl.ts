import {createTeamsAppDefinitionFromDiscriminatorValue} from './createTeamsAppDefinitionFromDiscriminatorValue';
import {TeamsAppDefinitionImpl} from './index';
import {TeamsAppDefinition} from './teamsAppDefinition';
import {TeamsAppDefinitionCollectionResponse} from './teamsAppDefinitionCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsAppDefinitionCollectionResponseImpl implements AdditionalDataHolder, Parsable, TeamsAppDefinitionCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TeamsAppDefinition[] | undefined;
    /**
     * Instantiates a new TeamsAppDefinitionCollectionResponse and sets the default values.
     * @param teamsAppDefinitionCollectionResponseParameterValue 
     */
    public constructor(teamsAppDefinitionCollectionResponseParameterValue?: TeamsAppDefinitionCollectionResponse | undefined) {
        this.additionalData = teamsAppDefinitionCollectionResponseParameterValue?.additionalData ? teamsAppDefinitionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = teamsAppDefinitionCollectionResponseParameterValue?.nextLink ;
        this.value = teamsAppDefinitionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TeamsAppDefinitionImpl>(createTeamsAppDefinitionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TeamsAppDefinitionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TeamsAppDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<TeamsAppDefinitionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
