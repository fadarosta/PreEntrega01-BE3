import { Router } from 'express';
import { generateMockPets } from '../mocks/pet.mocks.js';
import { CustomError, EErrors } from '../errors/customError.js';

const router = Router();

router.get('/mockingpets', (req, res) => {
    try {
        const pets = generateMockPets(100);
        res.json(pets);
    } catch (error) {
        // Manejo de errores personalizado
        if (error.message === 'Count must be a positive number') {
            CustomError.createError({
                name: 'MockingPetsError',
                cause: 'Invalid count parameter',
                message: 'Cannot generate pets with invalid count',
                code: EErrors.INVALID_TYPES_ERROR
            });
        }
        // Para otros errores
        CustomError.createError({
            name: 'MockingPetsError',
            cause: error,
            message: 'Error generating mock pets',
            code: EErrors.DATABASE_ERROR
        });
    }
});

export default router;