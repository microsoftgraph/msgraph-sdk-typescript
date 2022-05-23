import {createIdentityUserFlowAttributeFromDiscriminatorValue} from './createIdentityUserFlowAttributeFromDiscriminatorValue';
import {createUserAttributeValuesItemFromDiscriminatorValue} from './createUserAttributeValuesItemFromDiscriminatorValue';
import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {IdentityUserFlowAttributeAssignment} from './identityUserFlowAttributeAssignment';
import {IdentityUserFlowAttributeInputType} from './identityUserFlowAttributeInputType';
import {EntityImpl, IdentityUserFlowAttributeImpl, UserAttributeValuesItemImpl} from './index';
import {UserAttributeValuesItem} from './userAttributeValuesItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class IdentityUserFlowAttributeAssignmentImpl extends EntityImpl implements IdentityUserFlowAttributeAssignment, Parsable {
    /** The display name of the identityUserFlowAttribute within a user flow. */
    public displayName?: string | undefined;
    /** Determines whether the identityUserFlowAttribute is optional. true means the user doesn't have to provide a value. false means the user cannot complete sign-up without providing a value. */
    public isOptional?: boolean | undefined;
    /** Determines whether the identityUserFlowAttribute requires verification. This is only used for verifying the user's phone number or email address. */
    public requiresVerification?: boolean | undefined;
    /** The user attribute that you want to add to your user flow. */
    public userAttribute?: IdentityUserFlowAttribute | undefined;
    /** The input options for the user flow attribute. Only applicable when the userInputType is radioSingleSelect, dropdownSingleSelect, or checkboxMultiSelect. */
    public userAttributeValues?: UserAttributeValuesItem[] | undefined;
    /** The input type of the user flow attribute. Possible values are: textBox, dateTimeDropdown, radioSingleSelect, dropdownSingleSelect, emailBox, checkboxMultiSelect. */
    public userInputType?: IdentityUserFlowAttributeInputType | undefined;
    /**
     * Instantiates a new identityUserFlowAttributeAssignment and sets the default values.
     * @param identityUserFlowAttributeAssignmentParameterValue 
     */
    public constructor(identityUserFlowAttributeAssignmentParameterValue?: IdentityUserFlowAttributeAssignment | undefined) {
        super();
        this.displayName = identityUserFlowAttributeAssignmentParameterValue?.displayName ;
        this.isOptional = identityUserFlowAttributeAssignmentParameterValue?.isOptional ;
        this.requiresVerification = identityUserFlowAttributeAssignmentParameterValue?.requiresVerification ;
        this.userAttribute = identityUserFlowAttributeAssignmentParameterValue?.userAttribute ;
        this.userAttributeValues = identityUserFlowAttributeAssignmentParameterValue?.userAttributeValues ;
        this.userInputType = identityUserFlowAttributeAssignmentParameterValue?.userInputType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "isOptional": n => { this.isOptional = n.getBooleanValue(); },
            "requiresVerification": n => { this.requiresVerification = n.getBooleanValue(); },
            "userAttribute": n => { this.userAttribute = n.getObjectValue<IdentityUserFlowAttributeImpl>(createIdentityUserFlowAttributeFromDiscriminatorValue); },
            "userAttributeValues": n => { this.userAttributeValues = n.getCollectionOfObjectValues<UserAttributeValuesItemImpl>(createUserAttributeValuesItemFromDiscriminatorValue); },
            "userInputType": n => { this.userInputType = n.getEnumValue<IdentityUserFlowAttributeInputType>(IdentityUserFlowAttributeInputType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.isOptional){
        writer.writeBooleanValue("isOptional", this.isOptional);
        }
        if(this.requiresVerification){
        writer.writeBooleanValue("requiresVerification", this.requiresVerification);
        }
        if(this.userAttribute){
        writer.writeObjectValue<IdentityUserFlowAttributeImpl>("userAttribute", new IdentityUserFlowAttributeImpl(this.userAttribute));
        }
        if(this.userAttributeValues && this.userAttributeValues.length != 0){        const userAttributeValuesArrValue: UserAttributeValuesItemImpl[] = []; this.userAttributeValues?.forEach(element => {userAttributeValuesArrValue.push(new UserAttributeValuesItemImpl(element));});
        writer.writeCollectionOfObjectValues<UserAttributeValuesItemImpl>("userAttributeValues", userAttributeValuesArrValue);
        }
        if(this.userInputType){
        writer.writeEnumValue<IdentityUserFlowAttributeInputType>("userInputType", this.userInputType);
        }
    };
}
