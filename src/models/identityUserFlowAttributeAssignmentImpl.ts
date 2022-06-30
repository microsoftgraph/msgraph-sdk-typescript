import {createIdentityUserFlowAttributeFromDiscriminatorValue} from './createIdentityUserFlowAttributeFromDiscriminatorValue';
import {createUserAttributeValuesItemFromDiscriminatorValue} from './createUserAttributeValuesItemFromDiscriminatorValue';
import {IdentityUserFlowAttribute} from './identityUserFlowAttribute';
import {IdentityUserFlowAttributeAssignment} from './identityUserFlowAttributeAssignment';
import {IdentityUserFlowAttributeInputType} from './identityUserFlowAttributeInputType';
import {EntityImpl, IdentityUserFlowAttributeImpl, UserAttributeValuesItemImpl} from './index';
import {UserAttributeValuesItem} from './userAttributeValuesItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityContainer singleton. */
export class IdentityUserFlowAttributeAssignmentImpl extends EntityImpl implements IdentityUserFlowAttributeAssignment {
    /** The display name of the identityUserFlowAttribute within a user flow. */
    private _displayName?: string | undefined;
    /** Determines whether the identityUserFlowAttribute is optional. true means the user doesn't have to provide a value. false means the user cannot complete sign-up without providing a value. */
    private _isOptional?: boolean | undefined;
    /** Determines whether the identityUserFlowAttribute requires verification. This is only used for verifying the user's phone number or email address. */
    private _requiresVerification?: boolean | undefined;
    /** The user attribute that you want to add to your user flow. */
    private _userAttribute?: IdentityUserFlowAttribute | undefined;
    /** The input options for the user flow attribute. Only applicable when the userInputType is radioSingleSelect, dropdownSingleSelect, or checkboxMultiSelect. */
    private _userAttributeValues?: UserAttributeValuesItem[] | undefined;
    /** The input type of the user flow attribute. Possible values are: textBox, dateTimeDropdown, radioSingleSelect, dropdownSingleSelect, emailBox, checkboxMultiSelect. */
    private _userInputType?: IdentityUserFlowAttributeInputType | undefined;
    /**
     * Instantiates a new identityUserFlowAttributeAssignment and sets the default values.
     * @param identityUserFlowAttributeAssignmentParameterValue 
     */
    public constructor(identityUserFlowAttributeAssignmentParameterValue?: IdentityUserFlowAttributeAssignment | undefined) {
        super(identityUserFlowAttributeAssignmentParameterValue);
        this._displayName = identityUserFlowAttributeAssignmentParameterValue?.displayName;
        this._isOptional = identityUserFlowAttributeAssignmentParameterValue?.isOptional;
        this._requiresVerification = identityUserFlowAttributeAssignmentParameterValue?.requiresVerification;
        this._userAttribute = identityUserFlowAttributeAssignmentParameterValue?.userAttribute;
        this._userAttributeValues = identityUserFlowAttributeAssignmentParameterValue?.userAttributeValues;
        this._userInputType = identityUserFlowAttributeAssignmentParameterValue?.userInputType;
    };
    /**
     * Gets the displayName property value. The display name of the identityUserFlowAttribute within a user flow.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The display name of the identityUserFlowAttribute within a user flow.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
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
     * Gets the isOptional property value. Determines whether the identityUserFlowAttribute is optional. true means the user doesn't have to provide a value. false means the user cannot complete sign-up without providing a value.
     * @returns a boolean
     */
    public get isOptional() {
        return this._isOptional;
    };
    /**
     * Sets the isOptional property value. Determines whether the identityUserFlowAttribute is optional. true means the user doesn't have to provide a value. false means the user cannot complete sign-up without providing a value.
     * @param value Value to set for the isOptional property.
     */
    public set isOptional(value: boolean | undefined) {
        if(value) {
            this._isOptional = value;
        }
    };
    /**
     * Gets the requiresVerification property value. Determines whether the identityUserFlowAttribute requires verification. This is only used for verifying the user's phone number or email address.
     * @returns a boolean
     */
    public get requiresVerification() {
        return this._requiresVerification;
    };
    /**
     * Sets the requiresVerification property value. Determines whether the identityUserFlowAttribute requires verification. This is only used for verifying the user's phone number or email address.
     * @param value Value to set for the requiresVerification property.
     */
    public set requiresVerification(value: boolean | undefined) {
        if(value) {
            this._requiresVerification = value;
        }
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
            writer.writeObjectValue<IdentityUserFlowAttributeImpl>("userAttribute", (!this.userAttribute || this.userAttribute instanceof IdentityUserFlowAttributeImpl? this.userAttribute : new IdentityUserFlowAttributeImpl(this.userAttribute)));
        }
        if(this.userAttributeValues && this.userAttributeValues.length != 0){        const userAttributeValuesArrValue: UserAttributeValuesItemImpl[] = [];
        this.userAttributeValues?.forEach(element => {
            userAttributeValuesArrValue.push((element instanceof UserAttributeValuesItemImpl? element:new UserAttributeValuesItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<UserAttributeValuesItemImpl>("userAttributeValues", userAttributeValuesArrValue);
        }
        if(this.userInputType){
            writer.writeEnumValue<IdentityUserFlowAttributeInputType>("userInputType", this.userInputType);
        }
    };
    /**
     * Gets the userAttribute property value. The user attribute that you want to add to your user flow.
     * @returns a IdentityUserFlowAttributeInterface
     */
    public get userAttribute() {
        return this._userAttribute;
    };
    /**
     * Sets the userAttribute property value. The user attribute that you want to add to your user flow.
     * @param value Value to set for the userAttribute property.
     */
    public set userAttribute(value: IdentityUserFlowAttribute | undefined) {
        if(value) {
            this._userAttribute = value instanceof IdentityUserFlowAttributeImpl? value : new IdentityUserFlowAttributeImpl(value);
        }
    };
    /**
     * Gets the userAttributeValues property value. The input options for the user flow attribute. Only applicable when the userInputType is radioSingleSelect, dropdownSingleSelect, or checkboxMultiSelect.
     * @returns a UserAttributeValuesItemInterface
     */
    public get userAttributeValues() {
        return this._userAttributeValues;
    };
    /**
     * Sets the userAttributeValues property value. The input options for the user flow attribute. Only applicable when the userInputType is radioSingleSelect, dropdownSingleSelect, or checkboxMultiSelect.
     * @param value Value to set for the userAttributeValues property.
     */
    public set userAttributeValues(value: UserAttributeValuesItem[] | undefined) {
        if(value) {
            const userAttributeValuesArrValue: UserAttributeValuesItemImpl[] = [];
            this.userAttributeValues?.forEach(element => {
                userAttributeValuesArrValue.push((element instanceof UserAttributeValuesItemImpl? element:new UserAttributeValuesItemImpl(element)));
            });
            this._userAttributeValues = userAttributeValuesArrValue;
        }
    };
    /**
     * Gets the userInputType property value. The input type of the user flow attribute. Possible values are: textBox, dateTimeDropdown, radioSingleSelect, dropdownSingleSelect, emailBox, checkboxMultiSelect.
     * @returns a identityUserFlowAttributeInputType
     */
    public get userInputType() {
        return this._userInputType;
    };
    /**
     * Sets the userInputType property value. The input type of the user flow attribute. Possible values are: textBox, dateTimeDropdown, radioSingleSelect, dropdownSingleSelect, emailBox, checkboxMultiSelect.
     * @param value Value to set for the userInputType property.
     */
    public set userInputType(value: IdentityUserFlowAttributeInputType | undefined) {
        if(value) {
            this._userInputType = value;
        }
    };
}
