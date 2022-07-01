import {AdministrativeUnit} from './administrativeUnit';
import {createAdministrativeUnitFromDiscriminatorValue} from './createAdministrativeUnitFromDiscriminatorValue';
import {createEducationClassFromDiscriminatorValue} from './createEducationClassFromDiscriminatorValue';
import {createEducationUserFromDiscriminatorValue} from './createEducationUserFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {EducationClass} from './educationClass';
import {EducationSchool} from './educationSchool';
import {EducationUser} from './educationUser';
import {IdentitySet} from './identitySet';
import {AdministrativeUnitImpl, EducationClassImpl, EducationOrganizationImpl, EducationUserImpl, IdentitySetImpl, PhysicalAddressImpl} from './index';
import {PhysicalAddress} from './physicalAddress';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EducationSchoolImpl extends EducationOrganizationImpl implements EducationSchool {
    /** Address of the school. */
    private _address?: PhysicalAddress | undefined;
    /** The underlying administrativeUnit for this school. */
    private _administrativeUnit?: AdministrativeUnit | undefined;
    /** Classes taught at the school. Nullable. */
    private _classes?: EducationClass[] | undefined;
    /** Entity who created the school. */
    private _createdBy?: IdentitySet | undefined;
    /** ID of school in syncing system. */
    private _externalId?: string | undefined;
    /** ID of principal in syncing system. */
    private _externalPrincipalId?: string | undefined;
    /** The fax property */
    private _fax?: string | undefined;
    /** Highest grade taught. */
    private _highestGrade?: string | undefined;
    /** Lowest grade taught. */
    private _lowestGrade?: string | undefined;
    /** Phone number of school. */
    private _phone?: string | undefined;
    /** Email address of the principal. */
    private _principalEmail?: string | undefined;
    /** Name of the principal. */
    private _principalName?: string | undefined;
    /** School Number. */
    private _schoolNumber?: string | undefined;
    /** Users in the school. Nullable. */
    private _users?: EducationUser[] | undefined;
    /**
     * Gets the address property value. Address of the school.
     * @returns a PhysicalAddressInterface
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. Address of the school.
     * @param value Value to set for the address property.
     */
    public set address(value: PhysicalAddress | undefined) {
        if(value) {
            this._address = value instanceof PhysicalAddressImpl? value as PhysicalAddressImpl: new PhysicalAddressImpl(value);
        }
    };
    /**
     * Gets the administrativeUnit property value. The underlying administrativeUnit for this school.
     * @returns a AdministrativeUnitInterface
     */
    public get administrativeUnit() {
        return this._administrativeUnit;
    };
    /**
     * Sets the administrativeUnit property value. The underlying administrativeUnit for this school.
     * @param value Value to set for the administrativeUnit property.
     */
    public set administrativeUnit(value: AdministrativeUnit | undefined) {
        if(value) {
            this._administrativeUnit = value instanceof AdministrativeUnitImpl? value as AdministrativeUnitImpl: new AdministrativeUnitImpl(value);
        }
    };
    /**
     * Gets the classes property value. Classes taught at the school. Nullable.
     * @returns a EducationClassInterface
     */
    public get classes() {
        return this._classes;
    };
    /**
     * Sets the classes property value. Classes taught at the school. Nullable.
     * @param value Value to set for the classes property.
     */
    public set classes(value: EducationClass[] | undefined) {
        if(value) {
            const classesArrValue: EducationClassImpl[] = [];
            this.classes?.forEach(element => {
                classesArrValue.push((element instanceof EducationClassImpl? element as EducationClassImpl:new EducationClassImpl(element)));
            });
            this._classes = classesArrValue;
        }
    };
    /**
     * Instantiates a new EducationSchool and sets the default values.
     * @param educationSchoolParameterValue 
     */
    public constructor(educationSchoolParameterValue?: EducationSchool | undefined) {
        super(educationSchoolParameterValue);
        this._address = educationSchoolParameterValue?.address;
        this._administrativeUnit = educationSchoolParameterValue?.administrativeUnit;
        this._classes = educationSchoolParameterValue?.classes;
        this._createdBy = educationSchoolParameterValue?.createdBy;
        this._externalId = educationSchoolParameterValue?.externalId;
        this._externalPrincipalId = educationSchoolParameterValue?.externalPrincipalId;
        this._fax = educationSchoolParameterValue?.fax;
        this._highestGrade = educationSchoolParameterValue?.highestGrade;
        this._lowestGrade = educationSchoolParameterValue?.lowestGrade;
        this._phone = educationSchoolParameterValue?.phone;
        this._principalEmail = educationSchoolParameterValue?.principalEmail;
        this._principalName = educationSchoolParameterValue?.principalName;
        this._schoolNumber = educationSchoolParameterValue?.schoolNumber;
        this._users = educationSchoolParameterValue?.users;
    };
    /**
     * Gets the createdBy property value. Entity who created the school.
     * @returns a IdentitySetInterface
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. Entity who created the school.
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        if(value) {
            this._createdBy = value instanceof IdentitySetImpl? value as IdentitySetImpl: new IdentitySetImpl(value);
        }
    };
    /**
     * Gets the externalId property value. ID of school in syncing system.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. ID of school in syncing system.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        if(value) {
            this._externalId = value;
        }
    };
    /**
     * Gets the externalPrincipalId property value. ID of principal in syncing system.
     * @returns a string
     */
    public get externalPrincipalId() {
        return this._externalPrincipalId;
    };
    /**
     * Sets the externalPrincipalId property value. ID of principal in syncing system.
     * @param value Value to set for the externalPrincipalId property.
     */
    public set externalPrincipalId(value: string | undefined) {
        if(value) {
            this._externalPrincipalId = value;
        }
    };
    /**
     * Gets the fax property value. The fax property
     * @returns a string
     */
    public get fax() {
        return this._fax;
    };
    /**
     * Sets the fax property value. The fax property
     * @param value Value to set for the fax property.
     */
    public set fax(value: string | undefined) {
        if(value) {
            this._fax = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "address": n => { this.address = n.getObjectValue<PhysicalAddressImpl>(createPhysicalAddressFromDiscriminatorValue); },
            "administrativeUnit": n => { this.administrativeUnit = n.getObjectValue<AdministrativeUnitImpl>(createAdministrativeUnitFromDiscriminatorValue); },
            "classes": n => { this.classes = n.getCollectionOfObjectValues<EducationClassImpl>(createEducationClassFromDiscriminatorValue); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "externalPrincipalId": n => { this.externalPrincipalId = n.getStringValue(); },
            "fax": n => { this.fax = n.getStringValue(); },
            "highestGrade": n => { this.highestGrade = n.getStringValue(); },
            "lowestGrade": n => { this.lowestGrade = n.getStringValue(); },
            "phone": n => { this.phone = n.getStringValue(); },
            "principalEmail": n => { this.principalEmail = n.getStringValue(); },
            "principalName": n => { this.principalName = n.getStringValue(); },
            "schoolNumber": n => { this.schoolNumber = n.getStringValue(); },
            "users": n => { this.users = n.getCollectionOfObjectValues<EducationUserImpl>(createEducationUserFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the highestGrade property value. Highest grade taught.
     * @returns a string
     */
    public get highestGrade() {
        return this._highestGrade;
    };
    /**
     * Sets the highestGrade property value. Highest grade taught.
     * @param value Value to set for the highestGrade property.
     */
    public set highestGrade(value: string | undefined) {
        if(value) {
            this._highestGrade = value;
        }
    };
    /**
     * Gets the lowestGrade property value. Lowest grade taught.
     * @returns a string
     */
    public get lowestGrade() {
        return this._lowestGrade;
    };
    /**
     * Sets the lowestGrade property value. Lowest grade taught.
     * @param value Value to set for the lowestGrade property.
     */
    public set lowestGrade(value: string | undefined) {
        if(value) {
            this._lowestGrade = value;
        }
    };
    /**
     * Gets the phone property value. Phone number of school.
     * @returns a string
     */
    public get phone() {
        return this._phone;
    };
    /**
     * Sets the phone property value. Phone number of school.
     * @param value Value to set for the phone property.
     */
    public set phone(value: string | undefined) {
        if(value) {
            this._phone = value;
        }
    };
    /**
     * Gets the principalEmail property value. Email address of the principal.
     * @returns a string
     */
    public get principalEmail() {
        return this._principalEmail;
    };
    /**
     * Sets the principalEmail property value. Email address of the principal.
     * @param value Value to set for the principalEmail property.
     */
    public set principalEmail(value: string | undefined) {
        if(value) {
            this._principalEmail = value;
        }
    };
    /**
     * Gets the principalName property value. Name of the principal.
     * @returns a string
     */
    public get principalName() {
        return this._principalName;
    };
    /**
     * Sets the principalName property value. Name of the principal.
     * @param value Value to set for the principalName property.
     */
    public set principalName(value: string | undefined) {
        if(value) {
            this._principalName = value;
        }
    };
    /**
     * Gets the schoolNumber property value. School Number.
     * @returns a string
     */
    public get schoolNumber() {
        return this._schoolNumber;
    };
    /**
     * Sets the schoolNumber property value. School Number.
     * @param value Value to set for the schoolNumber property.
     */
    public set schoolNumber(value: string | undefined) {
        if(value) {
            this._schoolNumber = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.address){
            writer.writeObjectValue<PhysicalAddressImpl>("address", (this.address instanceof PhysicalAddressImpl? this.address as PhysicalAddressImpl: new PhysicalAddressImpl(this.address)));
        }
        if(this.administrativeUnit){
            writer.writeObjectValue<AdministrativeUnitImpl>("administrativeUnit", (this.administrativeUnit instanceof AdministrativeUnitImpl? this.administrativeUnit as AdministrativeUnitImpl: new AdministrativeUnitImpl(this.administrativeUnit)));
        }
        if(this.classes && this.classes.length != 0){        const classesArrValue: EducationClassImpl[] = [];
        this.classes?.forEach(element => {
            classesArrValue.push((element instanceof EducationClassImpl? element as EducationClassImpl:new EducationClassImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationClassImpl>("classes", classesArrValue);
        }
        if(this.createdBy){
            writer.writeObjectValue<IdentitySetImpl>("createdBy", (this.createdBy instanceof IdentitySetImpl? this.createdBy as IdentitySetImpl: new IdentitySetImpl(this.createdBy)));
        }
        if(this.externalId){
            writer.writeStringValue("externalId", this.externalId);
        }
        if(this.externalPrincipalId){
            writer.writeStringValue("externalPrincipalId", this.externalPrincipalId);
        }
        if(this.fax){
            writer.writeStringValue("fax", this.fax);
        }
        if(this.highestGrade){
            writer.writeStringValue("highestGrade", this.highestGrade);
        }
        if(this.lowestGrade){
            writer.writeStringValue("lowestGrade", this.lowestGrade);
        }
        if(this.phone){
            writer.writeStringValue("phone", this.phone);
        }
        if(this.principalEmail){
            writer.writeStringValue("principalEmail", this.principalEmail);
        }
        if(this.principalName){
            writer.writeStringValue("principalName", this.principalName);
        }
        if(this.schoolNumber){
            writer.writeStringValue("schoolNumber", this.schoolNumber);
        }
        if(this.users && this.users.length != 0){        const usersArrValue: EducationUserImpl[] = [];
        this.users?.forEach(element => {
            usersArrValue.push((element instanceof EducationUserImpl? element as EducationUserImpl:new EducationUserImpl(element)));
        });
            writer.writeCollectionOfObjectValues<EducationUserImpl>("users", usersArrValue);
        }
    };
    /**
     * Gets the users property value. Users in the school. Nullable.
     * @returns a EducationUserInterface
     */
    public get users() {
        return this._users;
    };
    /**
     * Sets the users property value. Users in the school. Nullable.
     * @param value Value to set for the users property.
     */
    public set users(value: EducationUser[] | undefined) {
        if(value) {
            const usersArrValue: EducationUserImpl[] = [];
            this.users?.forEach(element => {
                usersArrValue.push((element instanceof EducationUserImpl? element as EducationUserImpl:new EducationUserImpl(element)));
            });
            this._users = usersArrValue;
        }
    };
}
