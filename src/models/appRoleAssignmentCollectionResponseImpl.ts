import {AppRoleAssignment} from './appRoleAssignment';
import {AppRoleAssignmentCollectionResponse} from './appRoleAssignmentCollectionResponse';
import {createAppRoleAssignmentFromDiscriminatorValue} from './createAppRoleAssignmentFromDiscriminatorValue';
import {AppRoleAssignmentImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppRoleAssignmentCollectionResponseImpl implements AppRoleAssignmentCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AppRoleAssignment[] | undefined;
    /**
     * Instantiates a new AppRoleAssignmentCollectionResponse and sets the default values.
     * @param appRoleAssignmentCollectionResponseParameterValue 
     */
    public constructor(appRoleAssignmentCollectionResponseParameterValue?: AppRoleAssignmentCollectionResponse | undefined) {
        this.additionalData = appRoleAssignmentCollectionResponseParameterValue?.additionalData ? appRoleAssignmentCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = appRoleAssignmentCollectionResponseParameterValue?.nextLink;
        const valueArrValue: AppRoleAssignmentImpl[] = []; appRoleAssignmentCollectionResponseParameterValue?.value?.forEach(element => {valueArrValue.push(element instanceof AppRoleAssignmentImpl? element : new AppRoleAssignmentImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AppRoleAssignmentImpl>(createAppRoleAssignmentFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AppRoleAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof AppRoleAssignmentImpl? element : new AppRoleAssignmentImpl(element));});
            writer.writeCollectionOfObjectValues<AppRoleAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
