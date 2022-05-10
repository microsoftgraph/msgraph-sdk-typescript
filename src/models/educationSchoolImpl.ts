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

export class EducationSchoolImpl extends EducationOrganizationImpl implements EducationSchool, Parsable {
    /** Address of the school.  */
    address?: PhysicalAddress | undefined;
    /** The underlying administrativeUnit for this school.  */
    administrativeUnit?: AdministrativeUnit | undefined;
    /** Classes taught at the school. Nullable.  */
    classes?: EducationClass[] | undefined;
    /** Entity who created the school.  */
    createdBy?: IdentitySet | undefined;
    /** ID of school in syncing system.  */
    externalId?: string | undefined;
    /** ID of principal in syncing system.  */
    externalPrincipalId?: string | undefined;
    /** The fax property  */
    fax?: string | undefined;
    /** Highest grade taught.  */
    highestGrade?: string | undefined;
    /** Lowest grade taught.  */
    lowestGrade?: string | undefined;
    /** Phone number of school.  */
    phone?: string | undefined;
    /** Email address of the principal.  */
    principalEmail?: string | undefined;
    /** Name of the principal.  */
    principalName?: string | undefined;
    /** School Number.  */
    schoolNumber?: string | undefined;
    /** Users in the school. Nullable.  */
    users?: EducationUser[] | undefined;
    /**
     * Instantiates a new educationSchool and sets the default values.
     * @param educationSchoolParameterValue 
     */
    public constructor(educationSchoolParameterValue?: EducationSchool | undefined) {
        super();
        this.address = educationSchoolParameterValue?.address ;
        this.administrativeUnit = educationSchoolParameterValue?.administrativeUnit ;
        this.classes = educationSchoolParameterValue?.classes ;
        this.createdBy = educationSchoolParameterValue?.createdBy ;
        this.externalId = educationSchoolParameterValue?.externalId ;
        this.externalPrincipalId = educationSchoolParameterValue?.externalPrincipalId ;
        this.fax = educationSchoolParameterValue?.fax ;
        this.highestGrade = educationSchoolParameterValue?.highestGrade ;
        this.lowestGrade = educationSchoolParameterValue?.lowestGrade ;
        this.phone = educationSchoolParameterValue?.phone ;
        this.principalEmail = educationSchoolParameterValue?.principalEmail ;
        this.principalName = educationSchoolParameterValue?.principalName ;
        this.schoolNumber = educationSchoolParameterValue?.schoolNumber ;
        this.users = educationSchoolParameterValue?.users ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.address){
        if(this.address)
        writer.writeObjectValue<PhysicalAddressImpl>("address", new PhysicalAddressImpl(this.address));
        }
        if(this.administrativeUnit){
        if(this.administrativeUnit)
        writer.writeObjectValue<AdministrativeUnitImpl>("administrativeUnit", new AdministrativeUnitImpl(this.administrativeUnit));
        }
        if(this.classes){
        const classesArrValue: EducationClassImpl[] = []; this.classes?.forEach(element => {classesArrValue.push(new EducationClassImpl(element));});
        writer.writeCollectionOfObjectValues<EducationClassImpl>("classes", classesArrValue);
        }
        if(this.createdBy){
        if(this.createdBy)
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
        }
        if(this.externalId){
        if(this.externalId)
        writer.writeStringValue("externalId", this.externalId);
        }
        if(this.externalPrincipalId){
        if(this.externalPrincipalId)
        writer.writeStringValue("externalPrincipalId", this.externalPrincipalId);
        }
        if(this.fax){
        if(this.fax)
        writer.writeStringValue("fax", this.fax);
        }
        if(this.highestGrade){
        if(this.highestGrade)
        writer.writeStringValue("highestGrade", this.highestGrade);
        }
        if(this.lowestGrade){
        if(this.lowestGrade)
        writer.writeStringValue("lowestGrade", this.lowestGrade);
        }
        if(this.phone){
        if(this.phone)
        writer.writeStringValue("phone", this.phone);
        }
        if(this.principalEmail){
        if(this.principalEmail)
        writer.writeStringValue("principalEmail", this.principalEmail);
        }
        if(this.principalName){
        if(this.principalName)
        writer.writeStringValue("principalName", this.principalName);
        }
        if(this.schoolNumber){
        if(this.schoolNumber)
        writer.writeStringValue("schoolNumber", this.schoolNumber);
        }
        if(this.users){
        const usersArrValue: EducationUserImpl[] = []; this.users?.forEach(element => {usersArrValue.push(new EducationUserImpl(element));});
        writer.writeCollectionOfObjectValues<EducationUserImpl>("users", usersArrValue);
        }
    };
}
